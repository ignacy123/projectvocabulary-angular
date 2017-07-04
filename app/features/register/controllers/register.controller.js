'use strict';

/**
 * @ngdoc function
 * @name projectvocabularyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectvocabularyAngularApp
 */
angular.module('projectvocabularyAngularApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      type: "STUDENT"
    }
    $scope.submit = function () {
      alert("");
      $http.post('http://localhost:8080/projectvocabulary/register', {
        params: {email: $scope.user.email, password: $scope.user.password, firstName: $scope.user.firstname, lastName: $scope.user.lastname, type: $scope.user.type}
      }).success(function (data, status, headers, config) {
        console.log(data, status, headers, config)
      }).error(function (data, status, headers, config) {
        console.log(data, status, headers, config)
      });
    }
  });
