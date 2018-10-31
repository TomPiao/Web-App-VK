const express = require('express');
const path = require('path');
const router = express.Router();
const connection = require('./../../dbConnection');

router.get('/', (req, res, next) => {
    connection.query("SELECT DISTINCT * FROM Appetizers", function (err, result, fields) {
        if (err) throw err;
        if (result.length == 0) {
            res.status(404).json ({
                message: 'Error: Table does not exist'
            });
        } else {
            res.send(result);
        }
    });
    //return res.sendFile(path.join(__dirname + '../../../public/appetizers/index.html'));
});


router.post('/', (req, res, next) => {
    var id = req.body.appId;
    var name = req.body.Name;
    var price = req.body.Price;
    connection.query("INSERT INTO Appetizers (ID, Name, Price) VALUES ('" + id + "', '" + name + "', '" + price + "')", function (err, result, fields) {
        if (err) throw err;
        res.status(201).json ({
            message: 'handling Post requests for appetizers',
            ID: id,
            Name: name,
            Price: price
        });
    });
});

router.get('/:appetizerID', (req, res, next) => {
    var id = req.params.appetizerID;
    connection.query("SELECT DISTINCT * FROM Appetizers WHERE ID = " + JSON.stringify(id), function (err, result, fields) {
        if (err) throw err;
        if (result.length == 0) {
            res.status(404).json ({
                message: 'Error: item does not exist'
            });
        } else {
            res.send(result);
        }
    });
});

router.patch('/', (req, res, next) => {
    res.status(200).json ({
        message: 'handling Patch requests for appetizers'
    });
});

router.delete('/', (req, res, next) => {
    var id = req.body.appId;
    connection.query("DELETE FROM Appetizers WHERE ID = '" + id + "'", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json ({
            message: 'Deleted ' + id
        });
    });
});

module.exports = router;
