#!/bin/bash

# Configuration
HOST="rorygeddes.com"
USER="roryvaei"
REMOTE_DIR="public_html"

# Build the project
echo "Building project..."
npm run build

# Create the necessary files for deployment
echo "Preparing files for deployment..."

# Create .htaccess file
cat > dist/.htaccess << 'EOL'
# Redirect all requests to index.html for React Router
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable CORS
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
  Header set Access-Control-Allow-Headers "Content-Type, Authorization, X-Requested-With, x-api-key, anthropic-version"
</IfModule>

# Force HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Caching static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# Compress text files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>
EOL

# Create proxy.php file
cat > dist/proxy.php << 'EOL'
<?php
// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, x-api-key, anthropic-version');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Get request data
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// Set API key - Create a file called api_key.php with your key
// This file should contain: <?php define('ANTHROPIC_API_KEY', 'your-api-key-here'); ?>
require_once('api_key.php');
$api_key = defined('ANTHROPIC_API_KEY') ? ANTHROPIC_API_KEY : '';

// Make request to Anthropic API
$ch = curl_init('https://api.anthropic.com/v1/messages');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $request_body);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'x-api-key: ' . $api_key,
    'anthropic-version: 2023-06-01'
]);

// Get and return response
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Return the same status code and response
http_response_code($http_code);
header('Content-Type: application/json');
echo $response;
EOL

# Copy API key file
cp api_key.php dist/

# Deploy files
echo "Deploying files to $HOST..."
scp -r dist/* $USER@$HOST:$REMOTE_DIR/

# Deploy .htaccess (hidden file)
echo "Deploying .htaccess file..."
scp dist/.htaccess $USER@$HOST:$REMOTE_DIR/

echo "Deployment complete! Your website should be live at https://$HOST" 