'use strict';

/**
 * @ngdoc overview
 * @name projectvocabularyAngularApp
 * @description
 * # projectvocabularyAngularApp
 *
 * Main module of the application.
 */
angular
  .module('projectvocabularyAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'features/login/views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/about', {
        templateUrl: 'features/about/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
