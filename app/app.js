'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('gatepass', ['ui.router', 'ui.bootstrap'
])
  .config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    // $urlRouterProvider.otherwise('/household/add');
    
  }])

  //Define Route
  .config(['$stateProvider', function ($stateProvider) {
    // $stateProvider
    //   .state('register', {
    //     url: '/register',
    //     templateUrl: '/components/register/register.html',
    //     controller: 'registerController'
    //   })

  }])


