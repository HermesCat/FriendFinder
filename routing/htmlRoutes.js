module.exports = function (app) {
    
var path = require('path');

// this will send the html files
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
  
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

}
