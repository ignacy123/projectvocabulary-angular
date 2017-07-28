'use strict';

/**
 * @ngdoc function
 * @name projectvocabularyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectvocabularyAngularApp
 */
angular.module('projectvocabularyAngularApp')
  .controller('LoginCtrl', function ($scope, User) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.user = {
      email: "",
      password: ""
    }
    $scope.submit = function(){
      User.login($scope.user.email, $scope.user.password)
    }


  });
