'use strict';

/**
 * @ngdoc function
 * @name capstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capstoneApp
 */
angular.module('capstoneApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
  });
