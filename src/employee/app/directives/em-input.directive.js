app.directive('emInput', function () {
    return {
        restrict: 'E',
    //    controller: 'EMInputController',
        scope: {
            value: '=',
            error: '=?',
            editMode: '='
        },
        templateUrl: '/src/employee/app/templates/em-input.html'
    };
});