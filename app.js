const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const app = express();
const hostname = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    app.use(express.static('/'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    //fetchApps(res);
    myReadStream.pipe(res);
    //fetchApps(res);
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

router.get('/appetizers', function(req, res) {
    console.log("printing all apps");
    var sql = "SELECT * FROM Appetizers";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        var objs = [];
        for (var i = 0; i < result.length; i++) {
            objs.push({id: result[i].ID})
            objs.push({name: result[i].Name})
            objs.push({price: result[i].Price})
        }
        console.log(objs);
        return JSON.stringify(objs);
    });
    console.log(objs);
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
