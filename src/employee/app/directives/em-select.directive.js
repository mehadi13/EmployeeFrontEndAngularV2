app.directive('emSelect', function () {
    return {
        restrict: 'E',
        controller: 'EMSelectController',
        scope: {
            list: '=', /** list of options */
            select: '=?', /** default selected value */
            editMode: '=?'
        },
        templateUrl: '/src/employee/app/templates/em-select.html'
    };
});