'use strict';

angular.module('PersonalWebsiteApp', ['ui.router'])
  .config(['$stateProvider','$urlRouterProvider','$locationProvider', function ($stateProvider,$urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('derp',{
        url:'/derp',
        template: '<h1>Herp Derp</h1>'
      });

  }]);
