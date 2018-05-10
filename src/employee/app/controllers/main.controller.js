app.controller("MainController", function($scope) {

    $scope.$on("employeeClicked", function (evt, data) {
        //$scope.Message = "Inside MyController3 : " + data;
        console.log('main ctrl');
    });
});