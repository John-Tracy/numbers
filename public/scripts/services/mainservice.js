'use strict';

/**
 * @ngdoc function
 * @name partsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partsApp
 */
angular.module('App').service('mainService', function ($q, $http, API) {
	var self = this;

		self.fetch = function(number){
			var deferred = $q.defer();

			$http.get('http://' + API + '/number/get/' + number).then(function(res){
				console.log('success http');
				deferred.resolve(res);
			}, function(err){
				console.log('error http');
				deferred.reject(err);
			});

			return deferred.promise;
		};

	return this;
});