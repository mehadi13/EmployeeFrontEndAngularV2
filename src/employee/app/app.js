var app = angular.module("employee-app", ["ngRoute", "ngTable"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/src/employee/list/template/list.html"
        })
        .when("/create", {
            templateUrl: "/src/employee/form/template/form.html",
            controller: "CreateController"
        })
        .when("/employees/:name",{
            templateUrl: "/src/employee/form/template/form.html",
            controller: "UpdateController"
        });

    //$locationProvider.html5Mode(true);
});