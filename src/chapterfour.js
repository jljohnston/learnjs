


function addRow() {
    var artist = document.forms[0].artist.value;
    var cd = document.forms[0].cd.value;
    var cost = document.forms[0].cost.value;

    var html = "<tr><td>" + artist + "</td><td>" + cd + "</td><td>" + cost + "</td></tr>";
    document.getElementById("tableBody").innerHTML = html;

    // TODO: 1. Fix bug; Use an array to hold the values that are passed in then rebuild the table from the array every time. (Extra Credit for a two dimension array)
    // TODO: 2. Add code that clears the three text fields.
    // TODO: 3. Stretch Goal: Add code to set cursor to the Artist text box. (Use Google)
    // TODO: 4. Stretch Goal: Don't code this, but what ideas can you come up with to allow for sorting? (Use Google)

}