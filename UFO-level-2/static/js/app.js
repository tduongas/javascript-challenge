// from data.js
var tableData = data;

// Default global variables
var inputDate = "1/11/2010";
var inputCity = "";
var inputState = "";
var inputCountry = "";
var inputShape = "";

// Get a reference to the table body
var tbody = d3.select("tbody");

// Default load all data
loadTableData(tableData);


// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// On click event handler
button.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the datetime input element and get the raw HTML node and value
    var datetimeElement = d3.select("#datetime");
    var datetimeInput = datetimeElement.property("value");

    // Select the city input element and get the raw HTML node and value
    var cityElement = d3.select("#city");
    var cityInput = cityElement.property("value");

    // Select the state input element and get the raw HTML node and value
    var stateElement = d3.select("#state");
    var stateInput = stateElement.property("value");

    // Select the country input element and get the raw HTML node and value
    var countryElement = d3.select("#country");
    var countryInput = countryElement.property("value");

    // Select the shape input element and get the raw HTML node and value
    var shapeElement = d3.select("#shape");
    var shapeInput = shapeElement.property("value");

    // Reset table
    tbody.html('');

    // Assign global vairable with new date
    inputDate = datetimeInput;
    inputCity = cityInput;
    inputState = stateInput;
    inputCountry = countryInput;
    inputShape = shapeInput;

    var filteredData = tableData;

    // Use D3 filter function to get new dataset with Date filter
    if( inputDate != '' )
    {
        var filteredData = filteredData.filter(filterDate);
    }

    // Use D3 filter function to get new dataset with City filter
    if( inputCity != '' )
    {
        var filteredData = filteredData.filter(filterCity);
    }

    // Use D3 filter function to get new dataset with State filter
    if( inputState != '' )
    {
        var filteredData = filteredData.filter(filterState);
    }

    // Use D3 filter function to get new dataset with Country filter
    if( inputCountry != '' )
    {
        var filteredData = filteredData.filter(filterCountry);
    }

    // Use D3 filter function to get new dataset with Shape filter
    if( inputShape != '' )
    {
        var filteredData = filteredData.filter(filterShape);
    }

    console.log(filteredData);

    // Re-load with new data
    loadTableData(filteredData);

});


// loadTable function
function loadTableData(newData){
    newData.forEach((loadData) => {
        var row = tbody.append("tr");
        Object.entries(loadData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


function filterDate(data) {
    // If dataset date is equal to global variable data then use it
    return data.datetime == inputDate ;
}

function filterCity(data) {
    // If dataset date is equal to global variable data then use it
    return data.city == inputCity ;
}

function filterState(data) {
    // If dataset date is equal to global variable data then use it
    return data.state == inputState ;
}

function filterCountry(data) {
    // If dataset date is equal to global variable data then use it
    return data.country == inputCountry ;
}

function filterShape(data) {
    // If dataset date is equal to global variable data then use it
    return data.shape == inputShape ;
}