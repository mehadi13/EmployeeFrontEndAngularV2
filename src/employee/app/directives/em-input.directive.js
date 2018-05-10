app.directive('emInput', function () {
    return {
        restrict: 'E',
        scope: {
            model: '='
        },
        templateUrl: '/src/employee/app/templates/em-input.html'
    };
});