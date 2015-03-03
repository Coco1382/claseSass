var express = require('express');

var app = express();

var handlebars = require('express3-handlebars')
          .create({ defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');          


app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);

app.get('/', function(req, res){
	res.render('home');
});

app.get('/home', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about');
});

console.log('Server started on localhost');