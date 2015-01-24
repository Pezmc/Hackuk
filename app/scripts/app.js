'use strict';

/**
 * @ngdoc overview
 * @name ukhacksApp
 * @description
 * # ukhacksApp
 *
 * Main module of the application.
 */
angular
  .module('ukhacksApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
