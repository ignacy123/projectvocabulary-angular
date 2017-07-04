'use strict';

/**
 * @ngdoc function
 * @name projectvocabularyAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectvocabularyAngularApp
 */
angular.module('projectvocabularyAngularApp')
  .controller('RootCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.fab = {
      isOpen: false,
      count: 0,
      selectedDirection: 'left'
    };
  });
