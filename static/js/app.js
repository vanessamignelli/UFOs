// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// use d3 to look for tbody tags in the HTML
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear out any existing data
    // tbody references the table in HTML, ("") is an empty string
    // use an empty string when creating the table to create a blank canvas
    tobody.html("");

    // chain for loop to data and iterate through each row of data in the array
    data.forEach((dataRow) => {
        // create a variable that will append a row to the table body
        // find tbody tag within hmtl and add a table row
        let row = tbody.append("tr");
        // loop through eaxch field in datarow argument
        // reference one objext from array of ufo sightings, values go into data row, one object per row
        Object.values(dataRow).forEach((val) => {
            // append data into a table tag td
            let cell = row.append("td");
            // add the values
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // create variables to hold date data both filtered and unfiltered
    let date = d3.select("#datetime").property("value");
    // set default filter and save to new variable
    let filteredData = tableData;
    // check for a date, if one is present return only data with that date
    if (date){
        filteredData = filteredData.filter(row => row.datetime ===date);
    };
    // rebuild table using filtered data
    // if no date was entered filteredData will be original tableData
    buildTable(filteredData);
};

// listen for button click event on webpage
// link code to filter button and execute handleClick() when button with id = filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads using the original data imported 
buildTable(tableData);