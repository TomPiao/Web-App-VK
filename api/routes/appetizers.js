const express = require('express');
const router = express.Router();
const connection = require('./../../dbConnection');

router.get('/', (req, res, next) => {
    connection.query("SELECT * FROM Appetizers", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
        //res.send(JSON.stringify({'response': result}));
    });
});


router.post('/', (req, res, next) => {
    res.status(201).json ({
        message: 'handling Post requests for appetizers'
    });
});

router.get('/:appetizerID', (req, res, next) => {
    var id = req.params.appetizerID;
    res.status(200).json ({
        message: 'passed in an id',
        id: id
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
