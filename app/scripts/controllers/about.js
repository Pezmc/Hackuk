'use strict';

/**
 * @ngdoc function
 * @name ukhacksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ukhacksApp
 */
angular.module('ukhacksApp')
  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
