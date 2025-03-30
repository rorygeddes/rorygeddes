#!/bin/bash

# Configuration
HOST="rorygeddes.com"
USER="roryvaei"
PASSWORD="ENTER_YOUR_PASSWORD_HERE"  # Replace with your actual password
REMOTE_DIR="public_html"

# Create required files
echo "Creating necessary deployment files..."

# Create .htaccess
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
EOL

# Copy API key file
cp api_key.php dist/

# Create FTP commands file
cat > ftp_commands.txt << EOL
open $HOST
user $USER $PASSWORD
cd $REMOTE_DIR
mkdir -p assets
lcd dist
mput *
mput assets/*
put .htaccess
put proxy.php
put api_key.php
bye
EOL

# Upload with FTP
echo "Uploading files via FTP..."
ftp -inv < ftp_commands.txt

# Clean up sensitive file
rm ftp_commands.txt

echo "Deployment complete! Your website should be live at https://$HOST" 