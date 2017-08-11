'use strict';

/**
 * @ngdoc function
 * @name projectvocabularyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectvocabularyAngularApp
 */
angular.module('projectvocabularyAngularApp')
  .controller('LoginCtrl', function ($scope, User, $cookies, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.user = {
      email: "",
      password: "",
      remember: false
    }
    if($cookies.get("email")){
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate()+1);
      $cookies.put("email", $scope.user.email, {'expires': expireDate})
      $location.path("/root");
    }
    $scope.submit = function(){
      if($scope.remember){
        console.log("dziala");
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate()+1);
        console.log(expireDate);
        $cookies.put("email", $scope.user.email, {'expires': expireDate});
      }
      User.login($scope.user.email, $scope.user.password)
    }







  });
