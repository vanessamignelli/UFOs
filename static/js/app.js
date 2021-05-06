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