var cookieSession = require('cookie-session')
var express = require('express')
var app = express();
var path= require('path')

app.set('port', process.env.PORT || 8080);
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
 
app.set('trust proxy', 1) // trust first proxy
 
// app.use(function (req, res, next) {
//   var n = req.session.views || 0
//   req.session.views = n++
//   res.end(n + ' views')
// })


app.get('/', function (req, res, next) {
    var n = req.session.views 
    console.log(n)
    req.session.views = ++n
    console.log(n)
    res.send('PageCount = '+n)
});

var listener = app.listen(app.get('port'), function() {    
    console.log( 'express running, port: '+listener.address().port );
});
