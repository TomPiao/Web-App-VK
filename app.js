const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const appRoutes = require('./api/routes/appetizers');

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
 //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//    if (req.method === 'OPTIONS') {
///        res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, DELETE, GET');
//        res.status(200).json({});
//    }
//});


app.use('/appetizers', appRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;





//const server = http.createServer((req, res) => {
  //  res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
   // res.setHeader('Content-Type', 'text/html; charset=utf-8');
   // app.use
    //app.use(express.static('/'));
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    //fetchApps(res);
    //myReadStream.pipe(res);
    //fetchApps(res);
//});

//server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//});

//const con = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "tompi101",
//    database: "VK"
//});

//con.connect(function(err) {
//    if (err) throw err;
//        console.log("connected");
//});

//router.get('/appetizers', function(req, res) {
//    console.log("printing all apps");
//    var sql = "SELECT * FROM Appetizers";
//    con.query(sql, function (err, result, fields) {
//        if (err) throw err;
//        var objs = [];
//        for (var i = 0; i < result.length; i++) {
//            objs.push({id: result[i].ID})
//            objs.push({name: result[i].Name})
//            objs.push({price: result[i].Price})
//        }
//        console.log(objs);
//        return JSON.stringify(objs);
//    });
//    console.log(objs);
//});

//function executeQuery(sql, cb) {
//    con.query(sql, function (err, result, fields) {
//    if (err) throw err;
//        cb(result)
//    })
//}

//function fetchApps(res) {
//    executeQuery("SELECT * FROM Appetizers", function (result) {
//    res.write("<table>");
//    res.write("<tr>");
//    for (var column in result[0]) {
//        res.write("<td><label>" + column + "</label></td>");
//    }
//    res.write("</tr>");
//    for (var row in result) {
//        res.write("<tr>");
//        for (var column in result[row]) {
//            res.write("<td><label>" + result[row][column] + "</label></td>");
//        }
//        res.write("</tr>");
//    }
//    res.write("</table>");
//    res.end("hello\n");
//    });
//}
