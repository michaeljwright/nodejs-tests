
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');

const adminData = require('./routes/admin');
const userRoutes = require('./routes/user');
const shopRoutes = require('./routes/shop');

const app = express();

app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts', defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'views'); // not required as it's already done by default

app.use(bodyParser.urlencoded({ extended: false })); // middleware for body parsing / encoding for other routes below

app.use(express.static(path.join(__dirname, 'public'))); // middleware to serve static files like stylesheets and javascript

app.use('/admin', adminData.routes);

app.use('/users', userRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404 Page Not Found' });
});

app.listen(3001);
