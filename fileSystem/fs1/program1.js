// file system module to perform file operations
const fs = require('fs');
const dateformat = require('dateformat');


// date
const today = Date.now();
var todayAsString = dateformat(today, 'ddmmyy');
 
// json data
var jsonData = '{"firstname":"ali","familyname":"ferhi","mail":"@gmail.com"}';
 
// parse json
var jsonObj = JSON.parse(jsonData);
console.log("jsonObj = ");
console.log(jsonObj);
 
// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);
console.log("jsonContent = " +  jsonContent);
 
fs.appendFile("data/out/contact_" + todayAsString + ".json", jsonContent + "\n", 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});