/*
Here is where you set up your server file.
express middleware.
*/

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + '/public'));

// app.use(bodyParser.urlencoded({
// 	extended: false
// }));
// // override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
// 	defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

// var routes = require('./controllers/burgers_controller.js');
// app.use('/', routes);

// var port = 3000;
// app.listen(port);
// console.log('App listening on PORT ' + port);


var models = require('./models');

var sequelizedConnection = models.sequelize;

sequelizedConnection.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
	sequelizedConnection.sync({ force: true })
})



.then(function(){
	return models.burger.create(
	{
		name: "Bacon Cheeseburger",
		devoured: True
	},
	{
		name: "Onionizer",
		devoured: false
	},
	{
		name: "Veggie Burger",
		devoured: false
	},
	{
		name: "Too Good Burger",
		devoured: true
	}
	)
	.then(function(){
		return burger;
	})
})


app.get('/', function(req, res){
	res.send(
		"<h1>Remember your routes!</h1>" +
		"<h2>/uniform and /employees</h2>"
	);
});


app.get('/burger', function(req, res){
	res.json(burger);
});


// listen on port 3000
app.listen(3000, function(){
	console.log("Listening on port 3000")
});











