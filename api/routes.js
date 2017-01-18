module.exports.register = function() {
    console.log("Adding routes...");

    var server = require("server/content.js").server;

    server.get('/api/login/get', require('api/login/get.js').handler);
    server.get('/api/login/check', require('api/login/check.js').handler);
    server.get('/api/fleet/categories', require('api/fleet/categories.js').handler);
    server.post('/api/fleet/create', require('api/fleet/create.js').handler);
    server.post('/api/fleet/update', require('api/fleet/update.js').handler);
    server.get('/api/fleet/basic', require('api/fleet/basic.js').handler);
    server.get('/api/fleet/listing', require('api/fleet/listing.js').handler);
}