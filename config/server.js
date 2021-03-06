let express = require('express');
let consign = require('consign');
let app = express();
let bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', './app/views');



app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('./app/controllers')
    .then('./app/routes')
    .then('./app/models')
    .then('./config/dbConnection.js')
    .into(app);

    module.exports = app;