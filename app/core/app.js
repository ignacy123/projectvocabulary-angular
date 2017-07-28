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
    'ngMaterial',
    'projectvocabulary.api',
    'projectvocabulary.utils'
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
      .when('/root', {
        templateUrl: 'features/root/views/root.html',
        controller: 'RootCtrl',
        controllerAs: 'root'
      })
      .when('/register', {
        templateUrl: 'features/register/views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/userdata', {
        templateUrl: 'features/userdata/views/userdata.html',
        controller: 'UserdataCtrl',
        controllerAs: 'Userdata'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
