var http = require('http');

const port = 8080;

http.createServer((req,res) => {
    res.end('Hello World')
}).listen(port);