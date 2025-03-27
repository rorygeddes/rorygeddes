<?php
/**
 * cPanel Setup Script
 * 
 * Upload this file to your cPanel public_html directory and run it once.
 * This will set up the necessary .htaccess and proxy.php files.
 * 
 * IMPORTANT: Delete this file after running it!
 */

// Create .htaccess file
$htaccess = <<<EOT
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
EOT;

// Create proxy.php file
$proxy_php = <<<EOT
<?php
// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, x-api-key, anthropic-version');

// Handle preflight requests
if (\$_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Get request data
\$request_body = file_get_contents('php://input');
\$data = json_decode(\$request_body, true);

// Your API key - IMPORTANT: Replace with your actual API key
\$api_key = 'YOUR_ANTHROPIC_API_KEY_HERE';

// Make request to Anthropic API
\$ch = curl_init('https://api.anthropic.com/v1/messages');
curl_setopt(\$ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt(\$ch, CURLOPT_POST, true);
curl_setopt(\$ch, CURLOPT_POSTFIELDS, \$request_body);
curl_setopt(\$ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'x-api-key: ' . \$api_key,
    'anthropic-version: 2023-06-01'
]);

// Get and return response
\$response = curl_exec(\$ch);
\$http_code = curl_getinfo(\$ch, CURLINFO_HTTP_CODE);
curl_close(\$ch);

// Return the same status code and response
http_response_code(\$http_code);
header('Content-Type: application/json');
echo \$response;
EOT;

// Write files
file_put_contents('.htaccess', $htaccess);
file_put_contents('proxy.php', $proxy_php);

// Output results
echo '<h1>Setup Complete!</h1>';
echo '<p>Successfully created:</p>';
echo '<ul>';
echo '<li><strong>.htaccess</strong> - For routing and CORS</li>';
echo '<li><strong>proxy.php</strong> - For API proxy</li>';
echo '</ul>';
echo '<p><strong>IMPORTANT:</strong> Delete this setup file (cpanel-setup.php) now for security!</p>';
echo '<p>Next, upload your React built files (HTML, CSS, JS) to complete the installation.</p>'; 