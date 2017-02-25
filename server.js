var express = require('express')
var app = express()
var path = require ('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./'));

app.get('/', function (req, res) {
res.render('index', {title: 'Express'});
})

var server = app.listen(8080, function () {
var host = server.address().address
var port = server.address().port
consol.log('Escuchando at http://%s:%s', host, port)
})
