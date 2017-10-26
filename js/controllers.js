//app dependencies usually go in the brackets//
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

  $scope.author = {
    'name' : 'Emily Deans',
    'title' : 'Web Developer',
    'company' : 'Remains to Be Seen'
  }

});
