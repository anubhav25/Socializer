var http = require('http');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var logger = require('morgan');
var passportLocalMongoose = require('passport-local-mongoose');
var Login = require('./models/login');
var index = require('./routes/index');
var admin = require('./routes/admin');
var post = require('./routes/post');
var path = require('path');



var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);
server.listen(port, () => {
    console.log('listning')
});

var dburl = 'mongodb://localhost/Socializer';
dburl = 'mongodb://default:default@ds247698.mlab.com:47698/socializer'

mongoose.connect(dburl);

/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({
    secret: 'anything can be written here',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Login.authenticate()));
passport.serializeUser(Login.serializeUser());
passport.deserializeUser(Login.deserializeUser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(express.static(path.join(__dirname, 'dist')));
var Chat = require('./routes/chat')(server);
app.use('/api', index)
app.use('/chat', Chat);
app.use('/post', post);
app.use('/admin', admin);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))

})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err.message)
        // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.send('<h1>ERROR 404</h1>')
});



function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}