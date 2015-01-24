'use strict';

/**
 * @ngdoc function
 * @name ukhacksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ukhacksApp
 */
angular.module('ukhacksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
