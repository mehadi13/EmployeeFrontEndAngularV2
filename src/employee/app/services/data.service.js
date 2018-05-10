app.service("DataService", function($http) {
    var rootUrl = "http://localhost:9070/v1/";

    this.getData = function (path) {
        var data = $http.get(rootUrl + path).
            then(function (response) {
                return response.data;
            }, function (error) {
                return error.data;
            });
        return data;
    };

});

    