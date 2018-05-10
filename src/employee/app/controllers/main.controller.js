app.controller("MainController", function ($scope,$q, DataService) {

    /** Request for fetch all master data */
    let departments = DataService.getData("departments");
    let maritalstatuses = DataService.getData("maritalstatuses");
    let jobtypes = DataService.getData("jobtypes");
    let jobtitles = DataService.getData("jobtitles");
    let genders = DataService.getData("genders");
    let nationalities = DataService.getData("nationalities");
    let employees = DataService.getData("employees/all");

    /** Store in scope after fetch master data */
    $q.all([departments,maritalstatuses,jobtypes,jobtitles,genders, nationalities,employees]).then(data => {
        $scope.departments = data[0].result.departments;
        $scope.maritalstatuses = data[1].result.maritalstatuses;
        $scope.jobtypes = data[2].result.jobtypes;
        $scope.jobtitles = data[3].result.jobtitles;
        $scope.genders = data[4].result.genders;
        $scope.nationalities = data[5].result.nationalities;
        $scope.employees = data[6].result.employees;
        console.log('Status',$scope.maritalstatuses);
        console.log('Both promises have resolved', data);
    });

});