
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: "https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://bignerdranch.com",
    changeOrigin: true
}
module.exports = function (app) {
    // app.use(
    //     '/feed',
    //     createProxyMiddleware(proxy)
    // );
};