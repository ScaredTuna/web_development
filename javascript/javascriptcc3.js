//Create a variable with "He said "My name is elliott"" as the value and display it
var statement = "He said \"My name is elliott\"";
document.write(statement + "<br>");

//Using string methods, convert this string to uppercase and display it
statement = statement.toUpperCase();
document.write(statement + "<br>");

//Perform an addition on a number variable and a string variable ("1" + 2 etc.)
var x = "1";
var y = 2;
document.write("\"1\" + 2 = " + (Number(x) + y) + "<br>");

//Create an array with 3 strings and output them all
var stringArray = ["One", "Two", "Three"];
document.write(stringArray + "<br>");

//Add another string and output them
stringArray.push("Four");
document.write(stringArray + "<br>");

//Remove the last string from the array and output them all
stringArray.splice(3, 1);
document.write(stringArray + "<br>");
