
//Create a series of text boxes and buttons that let you create a person object and edit it

var person = {name: "", age: "", job: ""};

function maker(){
    setName();
    setAge();
    setJob();
}

function outputPerson(){
    document.getElementById("person").innerHTML = "<br>Name: " + person.name + "<br>Age: " + person.age + "<br>Job: " + person.job + "<br>";
}

function setName(){
    person.name = document.getElementById("newPerson").elements[0].value;
}

function setAge(){
    person.age = document.getElementById("newPerson").elements[1].value;
}

function setJob(){
    person.job = document.getElementById("newPerson").elements[2].value;
}

function editName(){
    person.name = document.getElementById("edit").elements[0].value;
}

function editAge(){
    person.age = document.getElementById("edit").elements[2].value;
}

function editJob(){
    person.job = document.getElementById("edit").elements[4].value;
}