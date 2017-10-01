'use strict';
/**
 * @ngdoc main controller
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partsApp
 */
angular.module('App').controller('MainCtrl', function($scope, mainService){

	$scope.searchNumber = function(searchParam) {
		console.log(searchParam);
		mainService.fetch(searchParam).then(function(res){
			console.log(res);
		}, function(err){
			console.log(err);
		});
	};

});
