app.directive('emSelect', function () {
    return {
        restrict: 'E',
        controller: 'EMSelectController',
        scope: {
            list: '=',
            select: '=?',
            editMode: '=?'
        },
        templateUrl: '/src/employee/app/templates/em-select.html'
    };
});