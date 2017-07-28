'use strict';

/**
 * @ngdoc function
 * @name projectvocabularyAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectvocabularyAngularApp
 */
angular.module('projectvocabularyAngularApp')
  .controller('UserdataCtrl', function ($scope, User) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ]
    var user = User.user();
    $scope.getFirstName = function(){
      console.log(user.firstName)
    }
    $scope.getLastName = function(){
      return user.lastName;
    }
    $scope.getEmail = function(){
      return user.email;
    }
  });
