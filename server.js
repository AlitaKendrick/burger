// install dependencies 
var express = require('express');
var methodO = require('method-override');
var bodyP = require('body-parser');
var exphbs = require('express-handlebars');


var app = express();

var PORT = process.env.PORT || 3000;
//Serve static content for the app from the "public" directory in the application directory.
app.use("/static", express.static("public"));

// parse application/x-www-form-urlencoded 
app.use(bodyP.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodO('_method'))
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

app.listen(PORT);

