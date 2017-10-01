'use strict';

if(!window.GLOBAL){
  window.GLOBAL = {
    'localhost': {
      API: 'localhost:8080/api'
    }
  }
}

/**
 * @ngdoc overview
 * @name partsApp
 * @description
 * # partsApp
 *
 * Main module of the application.
 */
angular
  .module('App', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ]).constant('API', window.GLOBAL[document.domain].API)
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/numbers.html',
        controller: 'NumbersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API
      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  });
