app.controller("UpdateController", function ($scope, $routeParams) {
    $scope.title = $routeParams.name;
    $scope.btnOne = "Edit";
    $scope.btnTwo = "Create";

    console.log('emp',$scope.employee);
    
});