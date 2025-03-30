#!/bin/bash

# Configuration
GITHUB_REPO="git@github.com:rorygeddes/rorygeddes.git"
GITHUB_BRANCH="main"
CPANEL_HOST="rorygeddes.com"
CPANEL_USER="roryvaei"
CPANEL_DIR="public_html"
SSH_KEY="$HOME/.ssh/id_rorygeddes"
SSH_OPTS="-i $SSH_KEY -o ConnectTimeout=30 -o ServerAliveInterval=60"
SCP_OPTS="-i $SSH_KEY -o ConnectTimeout=30 -o ServerAliveInterval=60"

# Step 1: Push to GitHub
echo "Pushing to GitHub..."
git add .
git commit -m "Update portfolio website - $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

# Step 2: Build the project
echo "Building project..."
npm run build

# Step 3: Create necessary files for deployment
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

# Copy API key file to dist
cp api_key.php dist/

# Step 4: Deploy to cPanel
echo "Preparing remote directory on cPanel..."
ssh $SSH_OPTS $CPANEL_USER@$CPANEL_HOST "mkdir -p $CPANEL_DIR"

echo "Deploying files to cPanel..."
# First delete all files in the public_html directory
ssh $SSH_OPTS $CPANEL_USER@$CPANEL_HOST "rm -rf $CPANEL_DIR/*"
# Then upload all new files
scp $SCP_OPTS -r dist/* $CPANEL_USER@$CPANEL_HOST:$CPANEL_DIR/

# Deploy .htaccess (hidden file)
echo "Deploying .htaccess file..."
scp $SCP_OPTS dist/.htaccess $CPANEL_USER@$CPANEL_HOST:$CPANEL_DIR/

echo "Deployment complete! Your website should be live at https://$CPANEL_HOST"
echo "GitHub repository has been updated as well." 