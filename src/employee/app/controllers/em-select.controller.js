app.controller("EMSelectController", function ($scope) {
    /** To show the option, filter value from object */
    $scope.getValue = function (item) {
        if (item.hasOwnProperty("status")) {
            return item.status;
        } else if (item.hasOwnProperty("country")) {
            return item.country;
        } else
            return item.name;
    };
});