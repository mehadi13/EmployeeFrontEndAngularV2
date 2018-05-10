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

    this.postData = function (path,data) {
        console.log('service call')
        var data = $http.post(rootUrl + path, data).
            then(function (response) {
                console.log('response success');
                return response.data;
            }, function (error) {
                console.log('response error');
                return error.data;
            });
        return data;
    };

    this.putData = function (path, data) {
        console.log('service call')
        var data = $http.post(rootUrl + path, data).
            then(function (response) {
                console.log('response success');
                return response.data;
            }, function (error) {
                console.log('response error');
                return error.data;
            });
        return data;
    };

});

    