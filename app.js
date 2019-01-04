var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var servicesRouter = require('./routes/services');
var aboutRouter = require('./routes/about');
var examRouter = require('./routes/exam');

var app = express();

app.use(logger('dev'));
app.use(express.json());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body partser middleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


// Setup routers
app.use('/', indexRouter);
app.use('/services', servicesRouter);
app.use('/about',aboutRouter);
app.use('/exam',examRouter);

// module.exports = app;

// Setting port
const port = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${port}`)
});
