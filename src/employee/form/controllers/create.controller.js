app.controller("CreateController",function($scope,DataService,$location){
    
    $scope.title = "create";

    $scope.editMode = true;
    $scope.employee = {};

    $scope.save = function () {
        console.log($scope.employee);
        DataService.postData('employees', $scope.employee).then(function (response) {
            console.log(response);
            if (response.result.hasOwnProperty("errors")) {
                console.log('validation fail');
                $scope.errors = response.result.errors;
            } else {
                console.log('saved');
                $scope.editMode = false;
                $scope.employee = response.result.employee;
                $scope.errors = {};
            }
        });
    };

    $scope.discard = function () {
        $location.path('/');
    };


});