var express = require('express');
var path = require('path');

var app = express();

// serve our static stuff like index.css
app.use(express.static(__dirname));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist','index.html'))
});

var PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});