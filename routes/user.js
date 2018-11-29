
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /users => GET
router.get('/', (req, res, next) => {

    res.render('user', {
        pageTitle: 'Users'
    });
    // res.sendFile(path.join(rootDir, 'views', 'user.html'));

});

module.exports = router;
