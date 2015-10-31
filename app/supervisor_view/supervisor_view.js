'use strict';

angular.module('myApp.supervisor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/supervisor', {
    templateUrl: 'supervisor_view/supervisor_view.html',
    controller: 'SupervisorViewCtrl'
  });
}])

.controller('SupervisorViewCtrl', ['$scope', function($scope) {
  $scope.viewStates = ['decision','success','successScreen','main']
  $scope.viewState = $scope.viewStates[3];
}]);