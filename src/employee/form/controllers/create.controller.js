app.controller("CreateController",function($scope,DataService,$location){
    /** initial value */
    $scope.title = "create";
    $scope.editMode = true;
    $scope.employee = {};

    /** create new employee */
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
                response.result.employee.dateOfBirth = new Date(response.result.employee.dateOfBirth);
                $scope.employee = response.result.employee;
                $scope.errors = {};
            }
        });
    };

    $scope.discard = function () {
        $location.path('/');
    };


});