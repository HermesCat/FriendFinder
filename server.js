var path = require('path');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

// Allows data to be sent to server as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);



// Starts the server
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
  