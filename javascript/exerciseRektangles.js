
//Given a word, a width and a length, you must print a rectangle with the word of the given dimensions

function createArray(height, width) {
    var array = [height];
    for(var i = 0; i < height; i++){
        array[i] = [width];
        for(var j = 0; j < width; j++){
            array[i][j] = "--";
        }
    }
    return array;
}

function populateArray(word, array, height, width){
    array[((word.length - 1) * height) - 1][0] = "T";
    for(var i = 0; i < ((word.length - 1) * width) + 1; i++){
        if(i % (word.length - 1) === 0){
            columnAdder(word, array, i, height);
        }
    }
    for(var j = ((word.length - 1) * height); j >= 0; j--){
        if (j % (word.length - 1) === 0){
            rowAdder(word, array, j, width);
        }
    }
}

function columnAdder(word, array, columnNo, height){
    var startPoint = height - 1;
    for(var i = 0; i < height; i++){
        addWordBackwardColumn(word, array, columnNo, startPoint);
        startPoint -= word.length - 1;
        addWordForwardColumn(word, array, columnNo, startPoint);
        startPoint -= word.length - 1;
    }
}

function rowAdder(word, array, rowNo, width){
    var startPoint = 0;
    for(var i = 0; i < width; i++){
        addWordBackwardRow(word, array, rowNo, startPoint);
        startPoint += word.length - 1;
        addWordForwardRow(word, array, rowNo, startPoint);
        startPoint += word.length - 1;
    }
}

function addWordForwardRow(word, array, rowNo, startPoint){
    var wordPos = 1;
    var arrayPos = startPoint;
    while(wordPos < word.length){
        array[rowNo][arrayPos] = word.charAt(wordPos);
        wordPos++;
        arrayPos++;
    }
}

function addWordBackwardRow(word, array, rowNo, startPoint){
    var wordPos = word.length - 2;
    var arrayPos = startPoint;
    while(wordPos >= 0){
        array[rowNo][arrayPos] = word.charAt(wordPos);
        wordPos--;
        arrayPos++;
    }
}

function addWordForwardColumn(word, array, columnNo, startPoint){
    var wordPos = 1;
    var arrayPos = startPoint;
    while(wordPos < word.length){
        array[arrayPos][columnNo] = word.charAt(wordPos);
        wordPos++;
        arrayPos--;
    }
}

function addWordBackwardColumn(word, array, columnNo, startPoint){
    var wordPos = word.length - 2;
    var arrayPos = startPoint;
    while(wordPos >= 0){
        array[arrayPos][columnNo] = word.charAt(wordPos);
        wordPos--;
        arrayPos--;
    }
}

function outputArray(array, arrayHeight, arrayWidth){
    var printString = "";
    for(var i = 0; i < arrayHeight; i++){
        for(var j = 0; j < arrayWidth; j++){
            printString += array[i][j] + "  ";
        }
        printString += "<br>";
    }
    document.getElementById("output").innerHTML = printString;
}

function rektangle(height, width){
    var word = document.getElementById("input").elements[0].value;
    var rectangleWidth = ((word.length - 1) * width) + 1;
    var rectangleHeight = ((word.length - 1) * height) + 1;
    var rectangle = createArray(rectangleHeight, rectangleWidth);
    populateArray(word, rectangle, height, width);
    outputArray(rectangle, rectangleHeight, rectangleWidth);
}