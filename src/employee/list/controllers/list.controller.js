app.controller("ListController", function ($scope,$rootScope, DataService, NgTableParams) {


    $scope.page = 1;

    $scope.getList = function () {
        console.log('called');
        DataService.getData("employees?page=" + $scope.page).then(function (response) {
            console.log(response);
            $scope.data = response.result.employees;
            $scope.totalPages = response.extra.totalPages;
            $scope.page = response.extra.page;
        });
    };

    $scope.$watch('data', function (newValue, oldValue, scope) {
        $scope.tableParams = new NgTableParams({
            count: 4
        }, { counts: [], dataset: $scope.data });
    });

    $scope.prePage = function () {
        if($scope.page > 1){
            $scope.page = $scope.page - 1;
            $scope.getList();
        }
    };

    $scope.nextPage = function () {
        if ($scope.page < $scope.totalPages){
            $scope.page = $scope.page+1;
            $scope.getList();
        }
    };

    $scope.broadcastEmployee = function(index){
        console.log('broadcast');
        $rootScope.employee = $scope.data[index];
    };

    $scope.getList();

});