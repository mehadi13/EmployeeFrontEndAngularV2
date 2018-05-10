app.controller("UpdateController", function ($scope, $routeParams,$location,DataService) {
    $scope.title = $routeParams.name;

    $scope.editMode = false;

    $scope.edit = function(){
        $scope.editMode = true;
    };

    $scope.create = function () {
        $location.path('create');
    };

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
                $scope.employee = response.result.employee;
                $scope.errors = {};
            }
        });
    };

    $scope.discard = function(){
        $scope.editMode = false;
    };
    
});