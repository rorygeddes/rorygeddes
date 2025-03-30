#!/bin/bash

# Configuration
CPANEL_USERNAME="roryvaei"
CPANEL_PASSWORD="ENTER_YOUR_PASSWORD_HERE" # Replace with your actual password
CPANEL_DOMAIN="rorygeddes.com"
CPANEL_THEME="paper_lantern" # Common cPanel theme

# Prepare directory for upload
cd dist

# Function to upload a file
upload_file() {
  local FILE=$1
  local REMOTE_PATH=$2
  
  echo "Uploading $FILE..."
  
  curl -k -F "file=@$FILE" \
       -F "dir=$REMOTE_PATH" \
       -F "overwrite=1" \
       "https://$CPANEL_DOMAIN:2083/execute/Fileman/upload_files" \
       -u "$CPANEL_USERNAME:$CPANEL_PASSWORD"
  
  echo ""
}

# Upload files in the current directory
for FILE in *; do
  if [ -f "$FILE" ]; then
    upload_file "$FILE" "/public_html"
  fi
done

# Upload files in the assets directory
if [ -d "assets" ]; then
  # Create assets directory if it doesn't exist
  curl -k \
       -F "dir=/public_html" \
       -F "name=assets" \
       "https://$CPANEL_DOMAIN:2083/execute/Fileman/mkdir" \
       -u "$CPANEL_USERNAME:$CPANEL_PASSWORD"
  
  # Upload files in assets directory
  for FILE in assets/*; do
    if [ -f "$FILE" ]; then
      upload_file "$FILE" "/public_html/assets"
    fi
  done
fi

# Upload .htaccess file
if [ -f ".htaccess" ]; then
  upload_file ".htaccess" "/public_html"
fi

echo "Upload complete!" 