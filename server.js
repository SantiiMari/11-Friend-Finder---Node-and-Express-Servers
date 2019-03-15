dependancies//

var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var apiRoutes = require ('./app/routing/apiRoutes');
var htmlRoutes = require ('./app/routing/htmlRoutes');

var PORT = process.env.PORT || 3000;

//Routes

app.use('/', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static(_dirname + '/app/public/'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
//make sure app can parse data


