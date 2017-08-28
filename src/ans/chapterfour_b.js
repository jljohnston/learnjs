

var mymap = [];

function addKeyValuePair(key, value) {
    // TODO: 1. Add the key value to mymap
    var key = document.forms[0].mkey.value;
    var value = document.forms[0].mvalue.value;

    // TODO: 3. Stretch Goal: Check if the key has already been added and if so confirm that the user wants to replace it.
    var repl = true;
    if ( mymap[key] ) {  // We can check if it exists without == null
        repl = confirm("Key " + key + " already exists replace it?");
    }
    if ( repl ) {
        mymap[key] = value;
    }
}

function doLookupValue() {
    // TODO: 2. Lookup the value by key and set it in the lookupValue span
    var key = document.forms[0].lookupKey.value;
    var value = mymap[key];
    document.getElementById("lookupValue").textContent = value;  // NOTE: In this case I needed to use textContent instead of innerHTML, see: https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-a-span-element-in-javascript
}