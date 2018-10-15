const http = require('http');
const app = require('./app');
const fs = require('fs');
const port = "8000";

function onRequest(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write("not found");
        } else {
            res.write(data);
        }
        res.end();
    });
}

const server = http.createServer(app);

server.listen(port);
