app.controller("ListController", function ($scope, $rootScope, DataService, NgTableParams) {


    $scope.page = 1;


    /**featch the list of employees */
    $scope.getList = function () {
        console.log('called');
        DataService.getData("employees?page=" + $scope.page).then(function (response) {
            console.log(response);
            $scope.data = response.result.employees;

            var i = 0;
            for (i = 0; i < $scope.data.length; i++) {
                var dob = new Date($scope.data[i].dateOfBirth);
                $scope.data[i].dateOfBirth = dob;
            }

            $scope.totalPages = response.extra.totalPages;
            $scope.page = response.extra.page;
        });
    };
    $scope.$watch('data', function (newValue, oldValue, scope) {
        $scope.tableParams = new NgTableParams({
            count: 4
        }, { counts: [], dataset: $scope.data });
    });
    $scope.getList();

    /** pagination button */
    $scope.prePage = function () {
        if ($scope.page > 1) {
            $scope.page = $scope.page - 1;
            $scope.getList();
        }
    };
    $scope.nextPage = function () {
        if ($scope.page < $scope.totalPages) {
            $scope.page = $scope.page + 1;
            $scope.getList();
        }
    };

    /** broadcast selected employee */
    $scope.broadcastEmployee = function (index) {
        console.log('broadcast');
        $rootScope.employee = $scope.data[index];
    };


    /** search */
    $scope.searchElements = [];
    $scope.removeSearch = function () {
        var lastItem = $scope.searchElements.length - 1;
        $scope.searchElements.splice(lastItem);
    }
    $scope.addNewSearch = function () {
        var newItemNo = $scope.searchElements.length + 1;
        $scope.searchElements.push({ 'id': 'element' + newItemNo });
    }

});