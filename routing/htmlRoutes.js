module.exports = function (app) {
    
var path = require('path');

// this will send the html files
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
  
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

//   these will send the css files and the image file

  
  // app.get('*', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/style.css'));
  // });

//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '/app/public/img/photo-1496523720220-b62e33cf3161.jpg'));
//   });
//   app.use(express.static(__dirname + '/app/public/img/photo-1496523720220-b62e33cf3161.jpg'));

}
