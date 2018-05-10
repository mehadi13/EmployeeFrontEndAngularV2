app.controller("EMSelectController", function ($scope) {
    console.log($scope.list);
    $scope.getValue = function (item) {
        if (item.hasOwnProperty("status")) {
            return item.status;
        } else if (item.hasOwnProperty("country")) {
            return item.country;
        } else
            return item.name;
    };
});