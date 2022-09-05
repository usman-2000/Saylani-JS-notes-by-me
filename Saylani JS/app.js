// Javascript is an interpretation language(line by line execution).

// alert("Hello World")
// alert jo hai wo pop-up msg mn print dikhayega

// console.log("Hello")
// yeh console mn jaa kr print kry ga


// printing a nmbrs stored in variables using alert and getting answer as a pop-up msg
// var a=5;
// var b=12;
// var c= a+b;
// alert(c)


// printing a nmbrs stored in variables using console.log and getting answer in console.
// var a=5;
// var b=12;
// var c= a+b;
// console.log(c)


//   Taking a string and a number, and it will concatenate, bcz it consider both as a string.
// var x=5;
// var y="ali";
// var z=y+x;
// alert(z)


// camelCase yeh hai k variable name start small letter sy beech mn capital letter like: usmanRahim, chatApp, aliMughal, getNumber....

// ans is mn 2010 hoga qk aik string hai or again wohi concatenation
// var f=20;
// var g="10"
// var c=f+g;
// alert(c)


// var f=20
// var c="2"
// var d=f*c
// console.log(d)

// post increment /pre increment ka scene

// var a= 5;
// var b= a++;
// alert(b)   //yahan per ans 5 hoga qk yeh post increment hai

// var a= 5;
// var b= ++a;
// alert(b) //yahan pr 6 ho jayegi qk pre-increment hai

// var a=10;
// var b= a++ + ++a - ++a + a++ + ++a
//        10 + 12  - 13  +   13  +  15
// var z= alert(b)


//           For taking input from user


// var a= prompt("what is your age?", " your age is : ")
// // alert(a)
// console.log(a)
// // document.write(a)

// var a=prompt("Enter value")
// var b=a+10
// var c= b*3
// console.log(b)
// console.log(c)


//      If you want to take input as an integer,  just simply apply + before prompt of variable

// var a=+prompt("enter value:")
// var b= a+10
// console.log(b)


// var a= "Enter your value"
// var b= "Your value is"
// var c= +prompt(a,b)
// var d= c +10
// console.log("The value is ",+ d)
// document.write("The value is ",+ d)


// ----------------------------------------if,else statements-----------------------------------------------

// var age = +prompt("enter your age")
// if(age == 20){
//     document.write("Your age is satisfied")
// }
// else if(age<20){
//     document.write("Your age is less")
// }
// else{
//     document.write("Your age is not in the requirement")
// }


//             AND,OR,NOT operators
// AND && EXAMPLE

// var age =+prompt("Enter Your Age:")
// var gender = prompt("Your Gender?")
// if (age > 18 && gender == "male"){
//     document.write("You are allowed to ride bike")
// }
// else{
//     document.write("You are not allowed")
// }

// OR || EXAMPLE

// var age =+prompt("Enter Your Age:")
// var gender = prompt("Your Gender?")
// if (age > 18 || gender == "male"){
//     document.write("You are allowed to ride bike")
// }
// else{
//     document.write("You are not allowed")
// }



// == will not check the type, but === will also check the type of the value.


// var a = "5"
// if (a == 5){
//     document.write(true)
// }
// else{
//     document.write(false)
// }


// var a = "5"
// if (a === 5){
//     document.write(true)
// }
// else{
//     document.write(false)
// }


// var num=+prompt("Enter Number")
// if (num % 3 == 0){
//     document.write("yes")
// }
// else{
//     document.write("Number is not divisible by 3")
// }


// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;
// if (x+y === a-b){
//     document.write("correct")
// }
// else{
//     document.write("Incorrect")
// }


//                    "!==" ---------> not equal to
//                    "===" ---------> equal to and also check the type


//          A marksheet example

// var percent = +prompt("Enter Your %")
// if (percent >= 80 && percent<=100){
//     document.write("Grade A+")
// }
// else if(percent >= 70 && percent<80){
//     document.write("Grade A")
// }
// else if(percent >= 60 && percent< 70){
//     document.write("Grade B")
// }
// else if(percent >=0 && percent<60){
//     document.write("You are Fail")
// }
// else{
//     document.write("You didnt write correct %")
// }



//        Nested if is faster than normal if and else statements



// let num = +prompt("Enter Number");
// if(num % 2 == 0){
//     document.write("Even")

// }
// else{
//     document.write("Odd")
// }

// let age = +prompt("age:");
// if(age > 18){
//     document.write("Old enough")
// }
// else{
//     document.write("Too young")
// }


// let user_name = prompt("Name:").toUpperCase();
// if(user_name === "USMAN"){
//     document.write("Hello my friend")
// } 
// document.write(user_name)


// let num = +prompt("Number");
// let div_num = num % 3
// switch (div_num) {
//     case 0:
//         document.write("Number is divisible by 3")
//         break;    

//     default:
//         document.write("Number is not divisible by 3")
//         break;
// }


// var character = prompt("Enter:")
// if (character==65){
//     document.write("It is a letter A(in uppercase)")
// }
// else if(character == 90){
//     document.write("It is a letter Z(in uppercase)")
// }
// else if(character == 97){
//     document.write("It is a letter a(in lowercase)")
// }
// else if(character == 122){
//     document.write("It is a letter z(in lowercase)")
// }


//            ARRAYS

// let students = ['usman','rahim']
// document.write(students[1])

// let names = [];
// names[0]="Usman"
// names[1]="rrrrrrr"
// names[2]="irfan"
// names[3]="1231"
// names[4]=34
// names[5]=21


// console.log(names)
// console.log(names.sort())
// console.log(names.shift())  //removes the first element from the array
// names.unshift("khalid","Ibrahim") // Add the elements in the start
// console.log(names)


// let names = ["usman ",231,4,5,63,"rahim"]
// names.splice(1,3,"khalid")      // frst element ka matlab hai k kahan sy start krna hai, scnd element ka mtlb hai k , koi element(ya kitny elemnt) remove krny hain, 3rd element ka mtlb hai k kya add krna hai 
// console.log(names)

// names.splice(0,2)   //jab srf remove krana ho, add kch bhi na krana ho
// console.log(names)


//  ------------------- CALCULATOR USING SWITCH METHOD-----------------


// let num1 = +prompt("Number 1 :")
// let num2 = +prompt("Number 2 :")
// let op = prompt("Enter operator:")

// switch (op) {
//     case "+":
//         document.write(num1 + num2)
//         break;

//     case "-":
//         document.write(num1 - num2)
//         break;

//     case "*":
//         document.write(num1 * num2)
//         break;

//     case "/":
//         document.write(num1 / num2)
//         break;

//     case "%":
//         document.write(num1 % num2)
//         break;

//     default:

//         break;
// }


// Q8


// let _time = prompt("Enter time in the format of 24 hrs")
// if(_time>= 0000 && _time <1200){
//     alert("Good Morning")
// }
// else if(_time >= 1200 && _time < 1700){
//     alert("Good Afternoon")
// }


//  --------For looop

// var x = 1;
// for (x;x<=10;x++){
//     document.write(x,'<br>');
// }

// for (x=1;x<=10; x + 2){
//     document.write(x,'<br>');
// }

// let i = 1;
// for(i; i<11 ; i++){
//     document.write(`2 X ${i}  = ${2*i}<br>`);
// }


// Flag


// var cities = ["Karachi", "lahore","islamabad"];
// for(var i = 0; i <= cities.length; i++){
//     if (cities[i] === "islamabad"){
//         alert(cities[i] +" is a cleanest city");
//     }
// }


// ------------Break-------------

// for(var i =1; i>0;i++){
//     if(i===10){
//         break
//     }
//     document.write("Hello <br>")
// }


// ------------Nested loop


// for(var i = 0; i<5;i++){
//     for(var j = 0; j<3 ;j++){
//         document.write("<ol> <li>PAK LIVE</li> </ol>")
//     }
// }


// var fname= ["usman","hassaan","sana"];
// var lname= ["rahim","shabbir"];

// for(var i = 0;i <fname.length; i++ ){
//     for(var j = 0; j<lname.length; j++){
//         document.write(`${fname[i]} ${lname[j]} <br>`)
//     }
// }


// for(var i = 0; i <10 ;i++){
//     for(var j =0; j< i; j++){
//         document.write("*");
//     }
//     document.write("<br>")
// }


// for(var i = 10; i >0 ;i--){
//     for(var j =0; j< i; j++){
//         document.write("*");
//     }
//     document.write("<br>")
// }



// var name = prompt("Enter Your name.")
// var check='';

// for(var i =name.length -1; i>=0;i--){
//     check += name[i];

// }
// if (check === name){
//     document.write(name," is a palindrome");
// }



// ------------------CHANGING CASE---------------


// tolowercase


// =======--------------Calculator----------===========


// var val1= +prompt("VALUE 1: ")
// var val2= +prompt("VALUE 2: ");

// var op = prompt("enter operator: ")

// if(op == '+'){
//     document.write(val1+val2);
// }
// else if(op == "-"){
//     document.write(val1-val2);
// }
// else if(op == '*'){
//     document.write(val1*val2);

// }
// else if(op == '/'){
//     document.write(val1/val2);

// }



// =============---------------A TABLE------------===========



// for(var i = 1; i <= 100; i = i+10){
//     for(var j = i; j< i+10;j++){
//         document.write(j+" ");
//     }
//     document.write("<br>");
// }


// lower and upper case =====================

// var name = prompt("Name:").toLowerCase;

// document.write(name);


// ===========================================================

// var city = prompt("Name of City");
// var fchar = city.slice(0,1).toUpperCase();
// var lchar = city.slice(1).toLowerCase();

// city = fchar+lchar;

// var arr = ['Karachi','Lahore','Sindh'];

// for(var i =0; i<arr.length; i++){
//     if(arr[i]===city){
//         alert("CITY HAS FOUND")
//         break
//     }
// }


// var entry = prompt("Enter: ");
// for (var i = 0; i < entry.length; i++) {
//     if (entry.slice(i, i + 2) === "  ") {
//         alert("Double spaces found");
        

//     }
// }


// var text = 'jaiso aosijdoia asjdpio kasie world war II iojaodiqw oijweiofjwoi oiwcfjwo ijnwvoiewoi';
// for(var i =0; i<text.length;i++){
//     if(text.slice(i,i+12) ==='world war II'){
//         text = text.slice(0,i) + 'the Second world war'+ text.slice(i+12);
//         document.write(text);
//     }
// }

// var text = "uhewfoiuwfw world war II uioqwfoiqef"
// var indexof = text.indexOf("world war II");
// document.write(indexof);

// text = text.slice(0,indexof) + " The second world war"+ text.slice(indexof+12);
// document.write(text)




// ================ FINDING AN INDEX OF CHARACTER===================


// var name = 'usman';
// document.write(name.charAt(2))


// ================ FINDING AN INDEX OF CHARACTER===================

// var text = 'this is an example tutorial, example and text, text and example';
// document.write(text.replace('example','good example'));

// g = global
// syntax = /anything/g

// document.write(text.replace(/example/g,'very much good'))


// ===================-------String to number-------============


// var a = '10';
// var b = Number(a);
// document.write(b, '<br>')
// var d = '12'
// var c = parseInt(d);
// document.write(c);

// document.write(c.toString());


// =============AGE CALCULATOR


// var dob = new Date(prompt("Enter dob","July 18,2000"));

// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var age = diff/(1000*60*60*24*30*12);
// var accAge = Math.floor(age);
// document.write(accAge);



// ==============----------- FUNCTIONS ---------============



// Jab function mn return kraa rahay hoty ho values ko to usko kisi variable mn store kraa do to achi bat hai takky us ko further use kiya jaa sky.
//  GLOBAL VARIABLES: outside the function declared.
// LOCAL VARIABLE: inside the function initialised. or isko out of the scope use nahi kr skty.

// parameters
// function first(a,b){
//     alert(a+b);
// }
// // Arguments
// first(2,3)


//  CALCULATOR


// function calc(num1,num2,op){
//     if(op === "+"){
//         return num1+num2;
//     }
//     else if(op === "-"){
//         return num1 - num2;
//     }
//     else{
//         return "Incorrect operator"
//     }
// }

// var a = calc(2,3,"+");
// var b = calc(2,3,"-");
// document.write(a)
// document.write(b)



// var a = "Rahim";

// switch(a){
//     case "usman":
//         alert("Hello Usman")
//         break
    
//     case "Rahim":
//         alert("Hello Rahim")
//         break

//     default:
//         alert("No name given")
//         break

// }



// ================ WHILE / DO WHILE LOOP===================

// while loop is faster than for loop in largers programes.because it checks the condition and execute code imeiately.

// var a = 0;
// while (a<10){
//     document.write(b);
//     a++;
// }

// do while

// var a = 0;
// do{
//     document.write(a);
//     a++
// }
// while(a>10);
