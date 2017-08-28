
var data = [];

function addRow() {
    var artist = document.forms[0].artist.value;
    var cd = document.forms[0].cd.value;
    var cost = document.forms[0].cost.value;

    var len = data.length;
    // TODO: 1. Fix bug; Use an array to hold the values that are passed in then rebuild the table from the array every time. (Extra Credit for a two dimension array)
    data.push([]);
    data[len][0] = artist;
    data[len][1] = cd;
    data[len][2] = cost;

    var html = "";
    for ( var i=0;i<data.length;i++ ) {
        html = html + "<tr><td>" + data[i][0] + "</td><td>" + data[i][1] + "</td><td>" + data[i][2] + "</td></tr>";
    }
    document.getElementById("tableBody").innerHTML = html;

    // TODO: 2. Add code that clears the three text fields.
    document.forms[0].artist.value = "";
    document.forms[0].cd.value = "";
    document.forms[0].cost.value = "";

    // TODO: 3. Stretch Goal: Add code to set cursor to the Artist text box. (Use Google)
    document.forms[0].artist.focus();

}

// TODO: 4. Stretch Goal: Don't code this, but what ideas can you come up with to allow for sorting? (Use Google)
function sortRows(sortBy) {
    var compareRows = function(a,b) {
        if ( a[sortBy] < (b[sortBy]) ) {
            return -1;
        }
        else if ( a[sortBy] > (b[sortBy]) ) {
            return 1;
        }
        return 0;
    }
    data.sort(compareRows);

    // Put rows back - (Good idea is to place this in a method so it's not duplicated)
    var html = "";
    for ( var i=0;i<data.length;i++ ) {
        html = html + "<tr><td>" + data[i][0] + "</td><td>" + data[i][1] + "</td><td>" + data[i][2] + "</td></tr>";
    }
    document.getElementById("tableBody").innerHTML = html;
}