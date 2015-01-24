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
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('dateSuffix', function($filter) {
    var suffixes = ['th', 'st', 'nd', 'rd'];
    return function(input, format) {
      var date = $filter('date')(input, 'dd');
      var day = parseInt(date.slice(-2));
      var dtformat = $filter('date')(input, format);
      var relevantDigits = (day < 30) ? day % 20 : day % 30;
      var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
      return dtformat + suffix;
    };
  })
  .run(function($rootScope) {
    $rootScope.config = {
      appName: 'Hacks.uk',
    };
    $rootScope.hacks = [
        {
          name: 'IC Hack',
          location: 'London UK',
          organiser: 'Imperial College',
          description: 'Imperial College Hackathon is an annual event held during the spring term. It has started as a way for Computing students to devote a weekend to hacking on ideas which they don\'t have the time for during the term. Each year has surpassed the previous one in the number of students participating and now IC Hack has grown into a college-wide event, incorporating developers, business students, industry sponsors and top mentors who help kick off the event and guide teams through technical challenges.',
          start: new Date('2015-02-07'),
          end: new Date('2015-02-08'),
          url: 'http://ichack.org/',
          sourceUrl: 'https://mlh.io/seasons/f2014-uk/events'
        },
        {
          name: 'IC Hack',
          location: 'London UK',
          organiser: 'Imperial College',
          description: 'Imperial College Hackathon is an annual event held during the spring term. It has started as a way for Computing students to devote a weekend to hacking on ideas which they don\'t have the time for during the term. Each year has surpassed the previous one in the number of students participating and now IC Hack has grown into a college-wide event, incorporating developers, business students, industry sponsors and top mentors who help kick off the event and guide teams through technical challenges.',
          start: new Date('2015-02-07'),
          end: new Date('2015-02-08'),
          url: 'http://ichack.org/',
          sourceUrl: 'https://mlh.io/seasons/f2014-uk/events'
        }
      ];
  });