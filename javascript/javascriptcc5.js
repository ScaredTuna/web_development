//Write a program that outputs numbers 1-100 but replaces multiples of 3 with Fizz and 5 with Buzz (Both with FizzBuzz)
var x = 1;
document.write(x.toString());
x++;
while(x <= 100){
    if(x % 5 == 0 && x % 3 == 0){
        document.write(", FizzBuzz");
    }
    else if(x % 5 == 0){
        document.write(", Buzz");
    }
    else if(x % 3 == 0){
        document.write(", Fizz");
    }
    else {
        document.write(", " + x.toString());
    }
    x++;
}
document.write("<br>");