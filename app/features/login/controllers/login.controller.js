'use strict';

/**
 * @ngdoc function
 * @name projectvocabularyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectvocabularyAngularApp
 */
angular.module('projectvocabularyAngularApp')
  .controller('LoginCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.user = {
      email: "",
      password: ""
    }
    $scope.submit = function () {
      $http.post('http://localhost:8080/projectvocabulary/login', {
        email: $scope.user.email,
        password: $scope.user.password
      }).success(function (data, status, headers, config) {
        console.log(data, status, headers, config)
      }).error(function (data, status, headers, config) {
        console.log(data, status, headers, config)
      });
    }


  });
