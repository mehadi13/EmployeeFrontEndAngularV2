app.service("MasterDataService", function masterDataService(DataService) {


    self.getDepartments = function () {
        var data = $http.get(rootUrl + "/departments").
            then(function (response) {
                return response.data;
            }, function (error) {
                return error;
            });
        return data;
    };

    // self.getGender = function () {
    //     var data = $http.get(rootUrl + "/genders").
    //         then(function (response) {
    //             return response.data;
    //         }, function (error) {
    //             return error;
    //         });
    //     return data;
    // };

    // self.getJobTitles = function () {
    //     var data = $http.get(rootUrl + "/jobtitles").
    //         then(function (response) {
    //             return response.data;
    //         }, function (error) {
    //             return error;
    //         });
    //     return data;
    // };

    // self.getJobTypes = function () {
    //     var data = $http.get(rootUrl + "/jobtypes").
    //         then(function (response) {
    //             return response.data;
    //         }, function (error) {
    //             return error;
    //         });
    //     return data;
    // };

    // self.getMaritalStatuses = function () {
    //     var data = $http.get(rootUrl + "/maritalstatuses").
    //         then(function (response) {
    //             return response.data;
    //         }, function (error) {
    //             return error;
    //         });
    //     return data;
    // };

    // self.getNationalities = function () {
    //     var data = $http.get(rootUrl + "/nationalities").
    //         then(function (response) {
    //             return response.data;
    //         }, function (error) {
    //             return error;
    //         });
    //     return data;
    // };
});

    