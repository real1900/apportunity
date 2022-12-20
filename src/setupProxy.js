
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: "https://feeds.feedburner.com",
    changeOrigin: true
}
module.exports = function (app) {
    app.use(
        '/appdevelopermagazine',
        createProxyMiddleware(proxy)
    );
};