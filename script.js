var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= 'John';
    $scope.lastName= "Doe";
    $scope.func = function(){
        alert('Hiiiii');
    }
});