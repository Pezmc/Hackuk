'use strict';

/**
 * @ngdoc function
 * @name ukhacksApp.controller:MainController
 * @description
 * # MainCtrl
 * Controller of the ukhacksApp
 */
angular.module('ukhacksApp')
  .controller('MainController', function ($scope, $rootScope) {
    $scope.test = 'test';
    console.log($rootScope);
  });
