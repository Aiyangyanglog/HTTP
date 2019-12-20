const http = require('http')

http.createServer(function (request, response){
    console.log('request come', request.url)
    // 1.对请求服务器的限制,不满足就不允许跨域
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',  //服务端限制
        // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8888' 只允许127.0.0.1服务端可以访问
        'Access-Control-Allow-Headers': 'X-Test-Cors', // 头部限制
        'Access-Control-Allow-Methods': 'POST, PUT, Delete', // 请求方式限制
        'Access-Control-Max-Age': '1000', // 请求最大时间限制
    })
    response.end('123')

}).listen(8887)

console.log('server listening on 8887')