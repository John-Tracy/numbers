
var numbersRoutes = function(router, MYSQL){

	router.get('/api/number/get/:number', function(req, res){
		console.log('serverside ' + req.params.number);
		res.json('you this is from the server');
		return;
	});

};

module.exports = numbersRoutes;