#!/bin/bash

# Configuration
HOST="rorygeddes.com"
USER="roryvaei"
REMOTE_DIR="public_html"
SSH_KEY="$HOME/.ssh/id_rorygeddes"

# Build the project
echo "Building project..."
npm run build

# Create the remote directory if it doesn't exist
echo "Preparing remote directory..."
ssh -i "$SSH_KEY" $USER@$HOST "mkdir -p $REMOTE_DIR"

# Deploy files
echo "Deploying files to $HOST..."
scp -i "$SSH_KEY" -r dist/* $USER@$HOST:$REMOTE_DIR/

# Deploy .htaccess (hidden file)
echo "Deploying .htaccess file..."
scp -i "$SSH_KEY" dist/.htaccess $USER@$HOST:$REMOTE_DIR/

# Deploy proxy.php
echo "Deploying proxy.php file..."
scp -i "$SSH_KEY" dist/proxy.php $USER@$HOST:$REMOTE_DIR/

echo "Deployment complete! Your website should be live at https://$HOST" 