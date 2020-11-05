const http = require('http');
const URL = require('url');


const server = http.createServer(function (req, res) {

    const myURL = "http://rabbil.com/blog.html?year=2020&month=july";

    const myURLObj = URL.parse(myURL, true);

    const myHostName = myURLObj.host;
    const myPathName = myURLObj.pathname;
    const mySearchName = myURLObj.search;

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(mySearchName);
        
});

server.listen(3000);
console.log('Server Started');



const server2 = http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<h1>This is Home page</h1>');
        res.end();
    }

    if (req.url == '/about') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<h1>This is About page</h1>');
        res.end();
    }

    if (req.url == '/contace') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<h1>This is Contact page</h1>');
        res.end();
    }
    
});

server.listen(3030);

