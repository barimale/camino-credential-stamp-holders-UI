// @ts-ignore: isolated modules error
var { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api', createProxyMiddleware('/api', {
        target: 'http://[::1]:3000/',
        changeOrigin: true }));
};