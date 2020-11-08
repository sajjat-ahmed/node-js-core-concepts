const { constants } = require('buffer');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>From</title></head></html>');
        res.write('<body><form method="post" action="/process"><input name="message" /></form></body>');
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk.toString());
            body.push(chunk);
        });
        req.on('end', () => {
            console.log("stream finished")
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        })
        res.write('hello Sajjat Ahmed.');
        res.end();
    } else {
        res.write('NOT FOUND');
        res.end();
    }
});

server.listen(3000);

console.log('listeniong on port 3000');
