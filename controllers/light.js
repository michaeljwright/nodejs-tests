
const Config = require('../models/config');
const Light = require('../models/light');
const ConfigLight = require('../models/config-light');
const Log = require('../models/log');

exports.getIndex = (req, res, next) => {

    const configId = req.query.config;

    Config.findAll({ where: { id: configId } })
        .then(configs => {

            if(configs) {
                return configs[0];
            }
            return configs;

        })
        .then(config => {

            if(config) {

                return config.getLights()
                    .then(lights => {

                        res.render('index', {
                          config: config,
                          lights: lights,
                          pageTitle: 'Traffic Lights',
                          path: '/'
                        });

                    })
                    .catch(err => console.log(err));
            }

            res.render('index', {
              config: null,
              lights: null,
              pageTitle: 'Traffic Lights',
              path: '/'
            });

        })
        .catch(err => console.log(err));

};

exports.getLights = (req, res, next) => {

    Lights.findAll()
    .then(lights => {
        return lights;
    })
    .catch(err => {
        console.log(err);
    });

};

exports.getStatus = (req, res, next) => {

    let code = req.query.code ? req.query.code : 200;

    // log status to database (if we required this)

    res.status(code).send();

};
