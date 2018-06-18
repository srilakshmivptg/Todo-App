var app = angular.module("myApp",[])

app.controller("homeController", function($scope){
    $scope.dummy ="test"
})
app.controller("siblingController", function($scope){
    $scope.dummy2 ="test23"
})