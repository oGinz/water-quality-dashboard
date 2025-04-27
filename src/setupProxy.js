
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL || 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      onProxyReq: (proxyReq) => {
        proxyReq.setHeader('X-Requested-With', 'XMLHttpRequest');
      },
      onError: (err, req, res) => {
        res.status(500).json({
          error: 'Proxy error',
          details: err.message
        });
      }
    })
  );


};