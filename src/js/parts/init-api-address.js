var token = "468de23a9f35b6586a94e3473f8ddbda7869fb00";

var defaultFormatResult = $.Suggestions.prototype.formatResult;

function formatResult(value, currentValue, suggestion, options) {
    var newValue = suggestion.data.city;
    suggestion.value = newValue;
    return defaultFormatResult.call(this, newValue, currentValue, suggestion, options);
}

function formatSelected(suggestion) {
    return suggestion.data.city;
}

$("#city").suggestions({
    token: token,
    type: "ADDRESS",
    hint: false,
    bounds: "city",
    constraints: {
        locations: { city_type_full: "город" }
    },
    formatResult: formatResult,
    formatSelected: formatSelected,
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});


let labelCity = document.querySelector('.get-city .label');
let wrapperCity = document.querySelector('.suggestions-wrapper');
labelCity.parentNode.insertBefore(labelCity, wrapperCity);