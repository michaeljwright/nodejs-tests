
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); // not required as it's already done by default

app.use(bodyParser.urlencoded({ extended: false })); // middleware for body parsing / encoding for other routes below

app.use(express.static('public')); // middleware to serve static files like stylesheets and javascript

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3001);
