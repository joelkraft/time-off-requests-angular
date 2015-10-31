'use strict';

angular.module('myApp.employee', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/employee', {
    templateUrl: 'employee_view/employee_view.html',
    controller: 'EmployeeViewCtrl'
  });
}])

.controller('EmployeeViewCtrl', ['$scope', function($scope) {
  $scope.viewStates = ['main','confirm','success'];
  $scope.viewState = $scope.viewStates[0];
}]);