
//depandancies again
var express = require('express');
// var path = require('path');
var apiRouter = express.Router();
var friendsData = require('../data/friends');

//create array display
apiRouter.get('/api/friends', function(req, res){
    res.join(friendsData);
});

//post req's to submit user data
apiRouter.post('/api/friends', function(req, res){
    var newFriend= req/body;
//convert scores 
    newFriend.scores.forEach(function(score){
    if (score.scores==="1 (Strongly Dissagree)") {
        scores.score =1;
    }
    else if (score.scores === '5 (Strong Agreement)'{
        score.scores = 5;
    }
    else {
        score.scores =parseInt(score.scores);
    }
    });

    var bestMatch = {};
    var marchedFriend =0;




})