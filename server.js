//dependancies

var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var apiRoutes = require ('./app/routing/apiRoutes');
var htmlRoutes = require ('./app/routing/htmlRoutes');

var PORT = process.env.PORT || 3001;

//General Routes

app.use('/', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
// //make sure app can parse data

//error logs
// app.use(function(req, res, next){
//     var err = new Error("Something is wrong");
//     err.status= 404;
//     next(err);
// });

//listening
app.listen(PORT, function(){
    console.log("App is tuned in on PORT" + PORT)
})
