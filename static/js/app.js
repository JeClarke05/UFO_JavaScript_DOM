// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//return all table data 
console.log(data);
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

//table building function
function buildTable(dataToRender) {
  tbody.html("")
  dataToRender.forEach(function(ufoData) {
      var row = tbody.append("tr");
      Object.entries(ufoData).forEach(function([key, value]) {
          var cell = tbody.append("td");
          cell.text(value);
      });
  });
}

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  //filter data
  var filteredData = tableData.filter(row => row.datetime === inputValue);

  console.log(filteredData);
  buildTable(filteredData);

});


