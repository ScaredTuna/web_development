'use strict';
//Function that accepts a string and returns how many times a character appears three times in a row

function triples(string){
    var i = 0;
    var noTriples = 0;
    while(i < string.length - 2){
        if(string[i] === string[i + 1] && string[i] === string[i + 2]){
            noTriples++;
        }
        i++;
    }
    return noTriples;
}

function outputTriples(){
    var string = document.getElementById("string").elements[0].value;
    document.getElementById("output").innerHTML = "Input String: " + string + "<br>" +
        "<br>Number of times a character appears three times in a row: " + triples(string) + "<br>";
}