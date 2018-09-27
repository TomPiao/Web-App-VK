const http = require('http');
const mysql = require('mysql');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    //fetchApps(res);
    myReadStream.pipe(res, end=false);
    fetchApps(res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tompi101",
    database: "VK"
});

con.connect(function(err) {
    if (err) throw err;
        console.log("connected");
});

function executeQuery(sql, cb) {
    con.query(sql, function (err, result, fields) {
    if (err) throw err;
        cb(result)
    })
}

function fetchApps(res) {
    executeQuery("SELECT * FROM Appetizers", function (result) {
    res.write("<table>");
    res.write("<tr>");
    for (var column in result[0]) {
        res.write("<td><label>" + column + "</label></td>");
    }
    res.write("</tr>");
    for (var row in result) {
        res.write("<tr>");
        for (var column in result[row]) {
            res.write("<td><label>" + result[row][column] + "</label></td>");
        }
        res.write("</tr>");
    }
    res.write("</table>");
    res.end("hello\n");
    });
}
