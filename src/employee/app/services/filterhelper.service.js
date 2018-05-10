app.service("FilterHelper", function filterHelper() {
    
    this.getValue = function (item, property) {
        console.log(item);
        if (property == 'department.name') {
            return item.department.name.toLowerCase();
        } else {
            return item[property].toLowerCase();
        }
    }

    this.isValid = function (element) {
        if (!angular.isUndefined(element.searchSelect)
            && !angular.isUndefined(element.searchText)) {
            return true;
        }
    }
});

    