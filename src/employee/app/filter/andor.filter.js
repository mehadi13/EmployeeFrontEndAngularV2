app.filter("andorfilter", function andorfilter(FilterHelper) {
    return function (dataArray, elements) {

        if (!dataArray) {
            return;
        }
        /* when term is cleared, return full array*/
        if (!elements) {
            return dataArray;
        } else {
            /* otherwise filter the array */
            return dataArray.filter(function (item) {
                var status = true;

                if (!angular.isUndefined(elements[0]) && FilterHelper.isValid(elements[0])) {
                    status = FilterHelper.getValue(item, elements[0].searchSelect).indexOf(elements[0].searchText.toLowerCase()) > -1;
                }
                for (var i = 1; i < elements.length; i++) {
                    if (!FilterHelper.isValid(elements[i]) ||
                        angular.isUndefined(elements[i - 1].operator))
                        break;

                    var operand = elements[i].searchText.toLowerCase();
                    var operator = elements[i - 1].operator;
                    var str = FilterHelper.getValue(item, elements[i].searchSelect);
                    if (operator == 'or') {
                        status = (status || (str.indexOf(operand) > -1));
                    } else if (operator == 'and') {
                        status = (status && (str.indexOf(operand) > -1));
                    }
                }
                return status;


            });
        }
    }
});