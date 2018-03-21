
//Given a word, a width and a length, you must print a rectangle with the word of the given dimensions

function createArray(height, width) {
    var array = [height];
    for(var i = 0; i < height; i++){
        array[i] = [width];
        for(var j = 0; j < width; j++){
            array[i][j] = " ";
        }
    }
    return array;
}

function populateArray(word, array, arrayHeight, arrayWidth){
    for(var i = 0; i < arrayWidth; i++){
        var wordPos = word.length;
        if(i % (word.length - 1) === 0){
            var arrayPos = arrayHeight - 1;
            while(arrayPos >= 0) {
                if(wordPos === word.length) {
                    for (var j = word.length - 1; j >= 0; j--) {
                        array[i][arrayPos] = word[j];
                        arrayPos--;
                        wordPos--;
                    }
                }
                else if(wordPos === 0){
                    for(var j = 0; j < word.length - 1; j++){
                        array[i][arrayPos] = word[j];
                        arrayPos--;
                        wordPos++;
                    }
                }
            }
        }
    }
    for(var i = arrayHeight - 1; i >= 0; i--){
        var wordPos = word.length;
        if(i % (word.length - 1) === 0){
            var arrayPos = 0;
            while(arrayPos < arrayWidth) {
                if(wordPos === word.length) {
                    for (var j = word.length - 1; j >= 0; j--) {
                        array[arrayPos][i] = word[j];
                        arrayPos++;
                        wordPos--;
                    }
                }
                else if(wordPos === 0){
                    for(var j = 0; j < word.length - 1; j++){
                        array[arrayPos][i] = word[j];
                        arrayPos++;
                        wordPos++;
                    }
                }
            }
        }
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

function rektangle(word, height, width){
    var rectangleWidth = ((word.length - 1) * width) + 1;
    var rectangleHeight = ((word.length - 1) * height) + 1;
    var rectangle = createArray(rectangleHeight, rectangleWidth);
    rectangle = populateArray(word, rectangle, rectangleHeight, rectangleWidth);
    outputArray(rectangle, rectangleHeight, rectangleWidth);
}