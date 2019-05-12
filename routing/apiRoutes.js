var friends = require('../app/data/friend.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
    res.json(friends);
    });



  app.post('/api/friends', function(req, res) {
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };

    console.log(req.body);


    //taking the result from the user survey and parsing the data
    var userData = req.body;
    var userScore = userData.scores;
    var calcDifference = 0;
//make a loop that goes through other users 
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      calcDifference = 0;

      //now do a nested loop through the other users scores
      for (var s = 0; s < friends[i].scores[s]; s++) {
        //calculating differences between the scores using the math.abs to change negatives to positives
        calcDifference += Math.abs(parseInt(userScore[s]) - parseInt(friends[i].scores[s]));

        if (calcDifference <= bestMatch.friendDifference) {

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = calcDifference;

        }
      }
    }

    //save user's data after check
    friends.push(userData);
    //return best match to user
    res.json(bestMatch);

  });



};