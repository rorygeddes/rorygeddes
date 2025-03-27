#!/bin/bash

# Configuration
HOST="rorygeddes.com"
USER="roryvaei"
REMOTE_DIR="public_html"
SSH_KEY="$HOME/.ssh/id_rorygeddes"
SSH_OPTS="-i $SSH_KEY -o ConnectTimeout=30 -o ServerAliveInterval=60 -v"
SCP_OPTS="-i $SSH_KEY -o ConnectTimeout=30 -o ServerAliveInterval=60 -v"

# Build the project
echo "Building project..."
npm run build

# Create the remote directory if it doesn't exist
echo "Preparing remote directory..."
ssh $SSH_OPTS $USER@$HOST "mkdir -p $REMOTE_DIR"

# Deploy files
echo "Deploying files to $HOST..."
scp $SCP_OPTS -r dist/* $USER@$HOST:$REMOTE_DIR/

# Deploy .htaccess (hidden file)
echo "Deploying .htaccess file..."
scp $SCP_OPTS dist/.htaccess $USER@$HOST:$REMOTE_DIR/

# Deploy proxy.php - it will use the api_key.php that's already on the server
echo "Deploying proxy.php file..."
scp $SCP_OPTS dist/proxy.php $USER@$HOST:$REMOTE_DIR/

echo "Deployment complete! Your website should be live at https://$HOST" 