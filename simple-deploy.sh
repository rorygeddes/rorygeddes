#!/bin/bash

# Configuration
CPANEL_HOST="rorygeddes.com"
CPANEL_USER="roryvaei"
CPANEL_DIR="public_html"

# Make sure the dist directory exists
if [ ! -d "dist" ]; then
  echo "Building project first..."
  npm run build
fi

# Create .htaccess file
echo "Creating .htaccess file..."
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
EOL

# Copy API key file to dist if it exists
if [ -f "api_key.php" ]; then
  cp api_key.php dist/
fi

# Simple direct upload to cPanel
echo "Uploading files to cPanel (you will be prompted for your password)..."
echo "First creating a clean directory..."
ssh $CPANEL_USER@$CPANEL_HOST "mkdir -p $CPANEL_DIR && rm -rf $CPANEL_DIR/*"

echo "Now uploading files..."
scp -r dist/* $CPANEL_USER@$CPANEL_HOST:$CPANEL_DIR/

echo "Finally uploading .htaccess file..."
scp dist/.htaccess $CPANEL_USER@$CPANEL_HOST:$CPANEL_DIR/

echo "Deploy complete! Your site should be live at https://$CPANEL_HOST" 