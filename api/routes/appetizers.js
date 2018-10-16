const express = require('express');
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
});


router.post('/', (req, res, next) => {
    res.status(201).json ({
        message: 'handling Post requests for appetizers'
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
    res.status(200).json ({
        message: 'handling Delete requests for appetizers'
    });
});

module.exports = router;
