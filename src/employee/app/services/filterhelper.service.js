(function () {
    var app = angular.module("employee-app");
    app.service("FilterHelper", filterHelper);

    function filterHelper() {
        var self = this;
        self.getValue = function (item, property) {
            if (property == 'department.name') {
                return item.department.name.toLowerCase();
            } else if (property == 'manager.name') {
                return item.manager.name.toLowerCase();
            } else {
                return item[property].toLowerCase();
            }
        }

        self.isValid =function(element){
            if(!angular.isUndefined(element.searchSelect)
            && !angular.isUndefined(element.searchText)){
                return true;
            }
        }
    }

})();