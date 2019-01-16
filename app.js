
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Light = require('./models/light');
const Config = require('./models/config');
const Log = require('./models/log');
const ConfigLight = require('./models/config-light');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const lightRoutes = require('./routes/light');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(lightRoutes);

app.use(errorController.get404);

Light.belongsToMany(Config, { through: ConfigLight });
Config.belongsToMany(Light, { through: ConfigLight });
Log.belongsTo(Light);
Log.belongsTo(Config);

sequelize
    // db setup
    .sync()
    // db inserts
    .then(result => {
        return Light.findByPk(1)
    })
    .then(light => {
        if(!light){
            return Light.create({
                url: 'http://www.google.com',
                frequency: 10000,
                status: 200
            })
            .then(light1 => {
                return Light.create({
                    url: 'http://www.notatallgoogle.com',
                    frequency: 10000,
                    status: 404
                })
                .then(light2 => {
                    return Config.create({
                        slug: 'example1',
                    })
                    .then(config => {
                        return ConfigLight.create({
                            lightId: light1.id,
                            configId: config.id
                        })
                        .then(configLight => {
                            return ConfigLight.create({
                                lightId: light2.id,
                                configId: config.id
                            });
                        });
                    });
                });
            });
        }
        return light;
    })
    // start server
    .then(light => {
        app.listen(3001);
    })
    // catch any errors
    .catch(err => {
        console.log(err);
    });
