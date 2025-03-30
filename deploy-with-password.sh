#!/bin/bash

# Configuration
GITHUB_REPO="git@github.com:rorygeddes/rorygeddes.git"
GITHUB_BRANCH="main"
CPANEL_HOST="rorygeddes.com"
CPANEL_USER="roryvaei"
CPANEL_DIR="public_html"

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
EOL

# Copy API key file to dist
cp api_key.php dist/

# Step 4: Deploy to cPanel using scp (will prompt for password)
echo "Deploying files to cPanel (you will be prompted for your cPanel password)..."

# Create temporary script to run on the server to prepare the directory
cat > clean_dir.sh << 'EOL'
#!/bin/bash
mkdir -p ~/public_html
rm -rf ~/public_html/*
EOL

# Upload the clean script and execute it
echo "Preparing remote directory on cPanel..."
scp clean_dir.sh $CPANEL_USER@$CPANEL_HOST:~/
ssh $CPANEL_USER@$CPANEL_HOST "chmod +x ~/clean_dir.sh && ~/clean_dir.sh && rm ~/clean_dir.sh"

# Upload all files
echo "Uploading files to cPanel..."
scp -r dist/* $CPANEL_USER@$CPANEL_HOST:$CPANEL_DIR/

# Upload .htaccess (hidden file)
echo "Uploading .htaccess file..."
scp dist/.htaccess $CPANEL_USER@$CPANEL_HOST:$CPANEL_DIR/

# Clean up
rm clean_dir.sh

echo "Deployment complete! Your website should be live at https://$CPANEL_HOST"
echo "GitHub repository has been updated as well." 