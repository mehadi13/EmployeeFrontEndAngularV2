app.controller("UpdateController", function ($scope, $routeParams,$location,DataService) {
    /** initial value */
    $scope.title = $routeParams.name;
    $scope.editMode = false;

    $scope.edit = function(){
        $scope.editMode = true;
    };

    /** show create form */
    $scope.create = function () {
        $location.path('/create');
    };

    /** update existing employee */
    $scope.save = function(){
        console.log($scope.employee);
        DataService.putData('employees',$scope.employee).then(function (response) {
            console.log(response);
            if (response.result.hasOwnProperty("errors")) {
                console.log('validation fail');
                $scope.errors = response.result.errors;
            } else {
                console.log('updated');
                $scope.editMode = false;
                response.result.employee.dateOfBirth = new Date(response.result.employee.dateOfBirth);
                $scope.employee = response.result.employee;
                $scope.errors = {};
            }
        });
    };

    $scope.discard = function(){
        $scope.editMode = false;
    };
    
});