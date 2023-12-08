/** @format */

// 1-Write a program that allow to user enter number then printit
/*
 var user = +window.prompt("enter number");
 document.getElementById("example-1").innerHTML = 'the output is'+ ' ' + user;
*/

//-----------------------------------------------------------------------------------------------------------

//2-Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
/*
var user = +window.prompt("enter number");
if(user%3==0 && user%4==0 ){
console.log('yes');
}
else{
    console.log('no');
}
*/

//-----------------------------------------------------------------------------------------------------------
//3-Write a program that allows the user to insert 2 integers then print the max
/*
var number1 = +window.prompt("enter number 1");
var number2 = +window.prompt("enter number 2");
if(number1>number2){
console.log("the maximum number is" +' '+ number1)
}
else{
    console.log("the maximum number is" + " " + number2);
}
*/

//-----------------------------------------------------------------------------------------------------------
//4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
/*
var num = +window.prompt("enter number ");
if(num<0){
    console.log('negative')
}
else{
    console.log('positive')
}
*/

//-----------------------------------------------------------------------------------------------------------
//5-Write a program that take 3 integers from user then print the max element and the min element.
/*
var num1 = +window.prompt("enter number 1");
var num2 = +window.prompt("enter number 2 ");
var num3 = +window.prompt("enter number 3");
if(num1>num2 && num1>num3 && num2>num3){
    console.log("the maximum number is is number1 =" + " " + num1);
     console.log("the minimum number is is number3 =" + " " + num3);
}
else if(num1>num2 && num1>num3 && num3>num2){
    console.log("the maximum number is is number1 =" + " " + num1);
     console.log("the minimum number is is number2 =" + " " + num2);
}
else if (num2 > num1 && num2 > num3 && num1>num3) {
  console.log("the maximum number is is number2 =" + " " + num2);
  console.log("the minimum number is is number3 =" + " " + num3);
}
else if (num2 > num1 && num2 > num3 && num3>num1) {
  console.log("the maximum number is is number2 =" + " " + num2);
  console.log("the minimum number is is number1 =" + " " + num1);
}
else if (num3 > num1 && num3 > num2 && num2>num1) {
  console.log("the maximum number is is number2 =" + " " + num3);
  console.log("the minimum number is is number1 =" + " " + num1);
}
else{
    console.log("the maximum number is number3 =" + " " + num3);
     console.log("the minimum number is is number2 =" + " " + num2);
} */

//-----------------------------------------------------------------------------------------------------------
//6&7-Write a program that allows the user to insert integer number then check If a number is oven or odd
/*
var number = +window.prompt("enter number ");
if (number%2==0) {
    console.log('this number is even')
}
else{
 console.log('this number is odd')
}
*/

//-----------------------------------------------------------------------------------------------------------
//8-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
/*
var char1 = window.prompt("enter character");
if(char1==='a'||char1==='e'||char1==='i'||char1==='o'||char1==='u'){
console.log('vowel')
}
else if(char1==='A'||char1==='E'||char1==='I'||char1==='O'||char1==='U'){
console.log("VOWEL");
}
else{
    console.log("consonant");
}
*/

//-----------------------------------------------------------------------------------------------------------
//9-Write a program that allows user to insert integer then print all numbers between 1 to that’s number
/*
var number = +window.prompt("enter number ");
for(var i=1 ; i<=number ; i++){
    console.log(i)
}
*/

//-----------------------------------------------------------------------------------------------------------
//10-Write a program that allows user to insert integer then print a multiplication table up to 12.
/*
var x = window.prompt('enter number ')
counter=1
for( var i=1 ; i<=12 ;i++){
 counter=x*i //5 
 console.log(counter)
}
*/
//-----------------------------------------------------------------------------------------------------------
//11-Write a program that allows to user to insert number then print all even numbers between 1 to this number
/*
var number = +window.prompt("enter number ");
if(number%2==0){
    for (var i = 1; i <= number; i++) {
    console.log(i);
    }
}
else{
    console.log('odd number')
}
*/

//-----------------------------------------------------------------------------------------------------------
//12-Write a program that take two integers then print the power
/*
var num= +window.prompt("enter number ");  //2
var power= +window.prompt("enter power");  //3
var res = 1;
for (let i = 0 ; i < power; i++) { 
    res = res * num; //2 4 8
}
console.log(res)
*/

//-----------------------------------------------------------------------------------------------------------
//13 (12)-Write a program to enter marks of five subjects and calculate total, average and percentage.
/*
var mark1= +window.prompt("enter mark1 ");  
var mark2= +window.prompt("enter mark2");  
var mark3 = +window.prompt("enter mark3 ");
var mark4 = +window.prompt("enter mark4");  
var mark5 = +window.prompt("enter mark5 ");

var total = mark1+mark2+mark3+mark4+mark5;
var avg =  total/5;
var perecentage = avg;
console.log('total = '+ total);
console.log("avg = " + avg);
console.log("perecentage = " + perecentage);
*/

//-----------------------------------------------------------------------------------------------------------
//13-Write a program to input month number and print number of days in that month.
/*
var month_number = +window.prompt("enter month number "); 
if (month_number == 1 || month_number == 3 ||month_number == 5 || month_number == 7 || month_number == 8||month_number == 10||month_number==12) {
    console.log("days in  month " + month_number + " : 31 dayes");
}
else if (month_number == 2) {
    console.log("days in  month " + month_number + " : 28 dayes or 29 in every leap year" );
}
else if (month_number == 4 || month_number == 6 ||month_number == 9 || month_number == 11 ) {
    console.log("days in  month " + month_number + " : 30 dayes");
}
else{
    console.log('invalid number');
}
*/

//-----------------------------------------------------------------------------------------------------------
//14-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade
/*
var mark1 = +window.prompt("enter mark for Physics ");
var mark2 = +window.prompt("enter mark for Chemistry");
var mark3 = +window.prompt("enter mark for Biology");
var mark4 = +window.prompt("enter mark for Mathematics");
var mark5 = +window.prompt("enter mark for Computer");

var total = mark1+mark2+mark3+mark4+mark5;
var perecentage = total/5
if (perecentage >= 90) {
  console.log("Grade A");
} else if (perecentage >= 80) {
  console.log("Grade B");
} else if (perecentage >= 70) {
  console.log("Grade C");
} else if (perecentage >= 60) {
  console.log("Grade D");
} else if (perecentage >= 40) {
  console.log("Grade E");
} else if (perecentage < 40) {
  console.log("Grade F");
} 
*/

//--------------------------------------------------------Using Switch Case---------------------------------------------------

//15-Write a program to print total number of days in month
/*
var month_number = +window.prompt("enter month number ");
switch (month_number) {
  case 1:
    console.log("days in  month " + month_number + " : 31 dayes");
    break;

  case 2:
    console.log(
      "days in  month " + month_number + " : 28 dayes or 29 in every leap year"
    );
    break;
  case 3:
    console.log("days in  month " + month_number + " : 31 dayes");
    break;

  case 4:
    console.log("days in  month " + month_number + " : 30 dayes");
    break;

  case 5:
    console.log("days in  month " + month_number + " : 31 dayes");
    break;

  case 6:
    console.log("days in  month " + month_number + " : 30 dayes");
    break;
  case 7:
    console.log("days in  month " + month_number + " : 31 dayes");
    break;

  case 8:
    console.log("days in  month " + month_number + " : 31 dayes");
    break;

  case 9:
    console.log("days in  month " + month_number + " : 30 dayes");
    break;

  case 10:
    console.log("days in  month " + month_number + " : 31 dayes");
    break;

  case 11:
    console.log("days in  month " + month_number + " : 30 dayes");
    break;

  case 12:
    console.log("days in  month " + month_number + " : 31 dayes");
    break;

  default:
    console.log("invalid number");
}
*/

//-------------------------------------------------------------------------------------------------------------
//16-Write a program to check whether an alphabet is vowel or consonant
/*
var char1 = window.prompt("enter character");
switch (char1) {
  case "a":
    console.log("vowel");
    break;

  case "A":
    console.log("vowel");
    break;
  case "e":
    console.log("vowel");
    break;

  case "E":
    console.log("vowel");
    break;

  case "i":
    console.log("vowel");
    break;

  case "I":
    console.log("vowel");
    break;
  case "o":
    console.log("vowel");
    break;

  case "O":
    console.log("vowel");
    break;

  case "u":
    console.log("vowel");
    break;

  case "U":
    console.log("vowel");
    break;

  default:
    console.log("consonant");
}
*/

//-------------------------------------------------------------------------------------------------------------
//17-Write a program to find maximum between two numbers
/*
var number1 = +window.prompt("enter number 1");
var number2 = +window.prompt("enter number 2");
switch (true) {
  case number1 > number2:
    console.log("the maximum number is" + " " + number1);
    break;
  case number2 > number1:
    console.log("the maximum number is" + " " + number2);
    break;
  case number1 == number2:
    console.log("number1 =  number2");
    break;
}
*/

//-------------------------------------------------------------------------------------------------------------
//18-Write a program to check whether a number is even or odd
/*
var number = +window.prompt("enter positive number");
switch (true) {
  case number % 2 === 0:
    console.log("even");
    break;
  case number % 2 !== 0:
    console.log("odd");
    break;
  default:
    console.log("negative number ");
}
*/

//-------------------------------------------------------------------------------------------------------------
//19-Write a program to check whether a number is positive or negative or zero
/*
var number = +window.prompt("enter  number");
switch (true) {
  case number > 0:
    console.log("positive");
    break;
  case number < 0:
    console.log("negative");
    break;
  default:
    console.log(" number = 0 ");
}
*/

//-------------------------------------------------------------------------------------------------------------
//20-Write a program to create Simple Calculator
/*
var operator = window.prompt("Enter operator (  +, -, * , / ): ");
var number1 = +window.prompt("enter number 1");
var number2 = +window.prompt("enter number 2");

switch (operator) {
  case "+":
    var result = number1 + number2;
    console.log(number1 + "+" + number2 + " = " + result);
    break;
  case "-":
    var result = number1 - number2;
    console.log(number1 + "-" + number2 + " = " + result);
    break;
  case "*":
    var result = number1 * number2;
    console.log(number1 + "*" + number2 + " = " + result);
    break;
  case "/":
    var result = number1 / number2;
    console.log(number1 + "/" + number2 + " = " + result);
    break;
}

*/