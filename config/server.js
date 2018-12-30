let express = require('express');
let consign = require('consign');
let app = express();
let bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./config/dbConnection.js')
    .into(app);

    module.exports = app;