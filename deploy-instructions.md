# Terminal Deployment Instructions

You can deploy your website directly from the terminal using SCP (Secure Copy). Follow these steps:

## 1. Replace placeholders with your actual cPanel information:

```
CPANEL_HOST="your-domain.com"  # Your cPanel hostname or IP
CPANEL_USER="your-username"    # Your cPanel username
REMOTE_DIR="public_html"       # Remote directory (usually public_html)
```

## 2. Run these commands from your project directory:

```bash
# Upload the main files
scp -r dist/* $CPANEL_USER@$CPANEL_HOST:$REMOTE_DIR/

# Upload the hidden .htaccess file 
scp dist/.htaccess $CPANEL_USER@$CPANEL_HOST:$REMOTE_DIR/
```

## 3. For example:

If your cPanel information is:
- Host: yourdomain.com
- Username: youruser
- Directory: public_html

Your commands would be:

```bash
scp -r dist/* youruser@yourdomain.com:public_html/
scp dist/.htaccess youruser@yourdomain.com:public_html/
```

You'll be prompted for your cPanel password during the upload.

## 4. Verify deployment

After the upload completes, visit your website to ensure everything is working:
```
https://yourdomain.com
```

## 5. For testing locally

Run `npm run dev` from the personal-ai-website directory to continue development locally.

## 6. For troubleshooting

If your API doesn't work after deployment:
1. Check browser console for errors
2. Ensure proxy.php is properly uploaded
3. Verify .htaccess is properly uploaded (it's a hidden file)
4. Check file permissions (644 for files, 755 for directories) 