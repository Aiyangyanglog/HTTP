const http = require('http')
const fs = require('fs')

const wait = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

http.createServer(function (request, response){
    console.log('request come', request.headers.host)

    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf-8')
        response.writeHead(200, {
            'Content-Type': 'text/html',
        })
        response.end(html)
    }

    if (request.url === '/data') {
        response.writeHead(200, {
            'Cache-Control': 's-maxage=2',
            'Vary': 'X-Test-Cache'
        })
        wait(2).then(() => response.end('success'))
    }

}).listen(8888)

console.log('server listening on 8888')