app.directive('emInput', function () {
    return {
        restrict: 'E',
    //    controller: 'EMInputController',
        scope: {
            value: '=',/** model name */
            error: '=?',
            editMode: '='
        },
        templateUrl: '/src/employee/app/templates/em-input.html'
    };
});