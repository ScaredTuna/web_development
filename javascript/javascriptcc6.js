
//Enter a large number. If divisible by 3 do so, else add or subtratc 1 to make it divisible by 3. Ends when value is 1

var num = 5873676578730;
var count = 0;
document.write("Initial Number: " + num + "<br>");
divider(num);
document.write("Number of Times Divided by 3: " + count + "<br>");

function divider(num){
    while(num != 1){
        var check = num % 3;
        if(check == 1){
            num--;

        }
        else if(check == 2){
            num++;
        }
        num = num / 3;
        count++;
    }
}