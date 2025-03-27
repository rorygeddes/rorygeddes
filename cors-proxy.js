// Simple proxy server to handle CORS issues during development
// Run with: node cors-proxy.js

const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

// Proxy for Anthropic API
app.use('/api/anthropic', createProxyMiddleware({
  target: 'https://api.anthropic.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/anthropic': ''
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('x-api-key', process.env.ANTHROPIC_API_KEY);
    proxyReq.setHeader('anthropic-version', '2023-06-01');
  }
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`CORS Proxy server running on port ${PORT}`);
});

// Add to package.json scripts:
// "proxy": "node cors-proxy.js" 