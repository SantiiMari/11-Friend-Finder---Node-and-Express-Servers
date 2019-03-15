//dependancies

var express = require ('express');
var path = require ('path');
var htmlRouter = express.Router();

//User view

htmlRouter.get('/', function(req, res){
res.sendFile('home.html', {root: path.join('./app/public')});

});
htmlRouter.get('/survey', function(req, res){
    res.sendFile('survey.html', {root: path.join('./app/public')});
});

//no match rroute
htmlRouter.get('*', function(req, res){
    res.sendFile('home.html', {root: path.join('./app/public')});
})

module.exports = htmlRouter;