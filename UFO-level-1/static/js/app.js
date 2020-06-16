// from data.js
var tableData = data;

// Default global variable to specfic date
var inputDate = "1/11/2010";

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

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // Get placeholder value
    var placeholder = inputElement.property("placeholder");

    // Reset table
    tbody.html('');

    // Default data time to placeholder value if input is not provided
    if( inputValue == '' )
    {
        inputValue = placeholder;
    }

    // Assign global vairable with new date
    inputDate = inputValue;

    // Use D3 filter function to get new dataset
    var filteredData = tableData.filter(filterDate);

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