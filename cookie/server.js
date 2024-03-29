const http = require('http')
const fs = require('fs')

http.createServer(function (request, response){
    console.log('request come', request.url)

    const host = request.headers.host

    if(request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8')
        if (host === 'a.test.com') {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'Set-Cookie': ['id=123;max-age=2', 'abc=456;HttpOnly;domain']
            })
        }
        response.end(html)
    }
}).listen(8888)

console.log('server listening on 8888')