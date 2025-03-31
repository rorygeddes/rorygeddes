#!/bin/bash

# Configuration
FTP_HOST="rorygeddes.com"
FTP_USER="roryvaei"
# We'll prompt for password during runtime for security
FTP_DIR="public_html"

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

# Ask for FTP password
echo "Please enter your FTP password for $FTP_USER@$FTP_HOST:"
read -s FTP_PASS

# Create FTP commands file
echo "Preparing FTP commands..."
cat > ftp_commands.txt << EOL
open $FTP_HOST
user $FTP_USER $FTP_PASS
cd $FTP_DIR
prompt off
mdelete *
mkdir assets
cd assets
mdelete *
cd ..
lcd dist
prompt off
mput *
cd assets
lcd assets
mput *
cd ..
lcd ..
put .htaccess
bye
EOL

# Upload with FTP
echo "Uploading files via FTP..."
ftp -inv < ftp_commands.txt

# Clean up sensitive file
rm ftp_commands.txt

echo "Deploy complete! Your site should be live at https://$FTP_HOST" 