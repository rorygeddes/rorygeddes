# Deploying to cPanel

This guide outlines the steps to deploy your React application to a cPanel hosting account.

## Prerequisites

1. A cPanel hosting account with file manager access
2. Your build files (contained in the `dist` folder or the `build.zip` file)
3. FTP client (optional, but recommended for large uploads)

## Deployment Steps

### Option 1: Using cPanel File Manager

1. **Log in to your cPanel account**

2. **Navigate to the File Manager**
   - Look for the "Files" section and click on "File Manager"
   - Select the document root for your domain (typically `public_html`)

3. **Create a directory for your application (optional)**
   - If you want to serve your app from a subdirectory (e.g., `mysite.com/app`), create a new folder
   - If you want to serve from the domain root, skip this step

4. **Upload your files**
   - Click on "Upload" in the top navigation
   - Select and upload all files from your local `dist` directory
   - Alternatively, upload the `build.zip` file and extract it in cPanel

5. **If you uploaded a ZIP file**
   - Right-click on the uploaded ZIP file
   - Select "Extract" and confirm the extraction
   - Move the contents from the extracted folder to your desired location

6. **Configure .htaccess for React Router (if needed)**
   - If your application uses React Router, create a new `.htaccess` file with the following content:
   ```
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
   - If your app is in a subdirectory, adjust `RewriteBase /` to `RewriteBase /your-subdirectory/`

### Option 2: Using FTP (Recommended for large files)

1. **Get FTP credentials from cPanel**
   - In cPanel, look for "FTP Accounts" or "FTP Manager"
   - Note your FTP username, password, and server

2. **Use an FTP client (like FileZilla, Cyberduck, etc.)**
   - Connect to your server using the FTP credentials
   - Navigate to your website's root directory (typically `public_html`)
   - Upload all files from your local `dist` directory to the server

3. **Configure .htaccess for React Router (if needed)**
   - Create the same `.htaccess` file as mentioned in Option 1

## Special Considerations for Your AI-Integrated Website

1. **API Key Security**
   - Your Anthropic API key used in production should be secured
   - Consider using a server-side proxy or cloud function to make API calls
   - You can set up a PHP proxy script on cPanel to handle the API requests

2. **CORS Configuration**
   - If you encounter CORS issues, create a `.htaccess` file with:
   ```
   <IfModule mod_headers.c>
     Header set Access-Control-Allow-Origin "*"
     Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
     Header set Access-Control-Allow-Headers "Content-Type"
   </IfModule>
   ```

3. **Server-Side Proxy for API Calls (Optional)**
   - Create a file named `proxy.php` with the following content:
   ```php
   <?php
   // Set CORS headers
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type');
   
   // Handle preflight requests
   if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
       exit(0);
   }
   
   // Get request data
   $request_body = file_get_contents('php://input');
   $data = json_decode($request_body, true);
   
   // Your API key - store this securely!
   $api_key = 'your-anthropic-api-key';
   
   // Make request to Anthropic API
   $ch = curl_init('https://api.anthropic.com/v1/messages');
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   curl_setopt($ch, CURLOPT_POST, true);
   curl_setopt($ch, CURLOPT_POSTFIELDS, $request_body);
   curl_setopt($ch, CURLOPT_HTTPHEADER, [
       'Content-Type: application/json',
       'x-api-key: ' . $api_key,
       'anthropic-version: 2023-06-01'
   ]);
   
   // Get and return response
   $response = curl_exec($ch);
   $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
   curl_close($ch);
   
   // Return the same status code and response
   http_response_code($http_code);
   echo $response;
   ?>
   ```

## Troubleshooting

1. **404 Errors with React Router**
   - If you encounter 404 errors when refreshing pages, ensure your `.htaccess` file is correctly configured
   
2. **API Connectivity Issues**
   - If your AI features aren't working, check browser console for CORS errors
   - Implement the PHP proxy described above
   
3. **File Permissions**
   - If pages don't load, check file permissions
   - HTML/CSS/JS files should have 644 permissions
   - Directories should have 755 permissions

## Updating Your Deployment

When you need to update your application:

1. Build your application locally with `npm run build`
2. Upload and replace the files on the server
3. Clear your browser cache to see the changes

## Need Additional Help?

If you need assistance with your cPanel deployment, contact your hosting provider's support team. 