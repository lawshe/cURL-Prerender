// Batch curl for Prerender caching service
var config = require('./config.js');
var recacheUrls = require('./recache_urls.js');
var curl = require('curlrequest');

var options = {};
console.log(recacheUrls.length);
options.url = 'http://api.prerender.io/recache';
options.headers = config.headers;
options.data =  config.data;

recacheUrls.forEach(function(url){
    var cloneOptions = JSON.parse(JSON.stringify(options));
    cloneOptions.data.url = url;
    curl.request(cloneOptions, function (err, data) {
        if (err) {
            console.error('Error: ', cloneOptions.data.url, err);
        } else if (data){
            console.log(data, cloneOptions.data.url);
        }
    });
});
