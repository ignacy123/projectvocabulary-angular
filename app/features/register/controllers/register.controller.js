'use strict';

/**
 * @ngdoc function
 * @name projectvocabularyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectvocabularyAngularApp
 */
angular.module('projectvocabularyAngularApp')
  .controller('RegisterCtrl', function ($scope, User) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = {
      email: "",
      password: "",
      passwordconfirmation:"",
      firstname: "",
      lastname: "",
      type: "",
      uid: ""
    }
    $scope.submit = function () {
      User.register($scope.user.email, $scope.user.password, $scope.user.firstname, $scope.user.lastname, $scope.user.type,  $scope.user.uid);
    }
  });
