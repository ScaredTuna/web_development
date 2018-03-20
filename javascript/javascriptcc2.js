//Create a function that accepts a number and outputs its square
function square(number){
    var output = number * number;
    document.write(output.toString() + "<br>");
}

//Create a function that accepts 3 numbers and returns the sum of them
function sumThree(a, b, c){
    return a + b + c;
}

//Create a Person object with three values: name, age and occupation
var person = {
    name: "John",
    age: 23,
    occupation: "Sales Rep"
};

//Create a button that increases the age of a person object when clicked
function ageUp(){
    person.age++;
    showPerson();
}

function showPerson(){
    document.write("<br>Name: " + person.name + "<br>Age: " + person.age + "<br>Occupation: " + person.occupation + "<br>");
}

//Coding challenge 4: Check age is between 20 and 40
function ageCheck(){
    if(person.age > 20 || person.age < 40){
        document.write("Age is between 20 and 40<br>");
    }
    else {
        document.write("Age is not between 20 and 40<br>");
    }
}

square(5);
document.write("2 + 3 + 4 = " + sumThree(2, 3, 4) + "<br>");
showPerson();
person.name = "Mary";
person.age = 21;
person.occupation = "Journalist";
showPerson();
