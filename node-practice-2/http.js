const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Programmers');
        res.write('How are you doing?');
        res.end();
    } else if (req.url === 'about') {
        res.write('hello Sajjat Ahmed.');
        res.end();
    } else {
        res.write('NOT FOUND');
        res.end();
    }
});

server.listen(3000);

console.log('listeniong on port 3000');
