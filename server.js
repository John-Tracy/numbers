// set up ======================================================================
var express = require('express');
var router = express(); 						// create our app w/ express
var port = process.env.PORT || 8080; 				// set the port
//var database = require('./config/database'); 			// load the database config
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.use(cors());
router.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
router.use(morgan('dev')); // log every request to the console
router.use(bodyParser.urlencoded({'extended': 'true'})); // parse routerlication/x-www-form-urlencoded
router.use(bodyParser.json()); // parse routerlication/json
router.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
router.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// MYSQL connect ==============================================================
var MYSQL_CONNECTION = require('./config/mysql.js');

// routes ======================================================================
//require('./app/routes.js')(app);
require('./app/api/numbers.js')(router, MYSQL_CONNECTION);



router.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start router with node server.js) ======================================
router.listen(port);
console.log("Server listening on port " + port);
