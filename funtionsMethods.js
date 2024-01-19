//console.log("hello!");
//"xyz".toUpperCase()
//"ABC".toLowerCase()
//[1,2,3].push(4);
/*
function myFuntion(){
    console.log("My java journey");
    console.log("My name is Jaishree");
}

myFuntion();
myFuntion();
myFuntion(); */

/*
function newAdd(){
    console.log("my new funtion");
}

newAdd();
newAdd();*/

/*
function myFuntion(mymessage){
    console.log(mymessage);
}
myFuntion("kushwah");
myFuntion("jaishree"); //arguement*/

// Create a function sum of two numbers.
/*
function sum(a,b){
    console.log(a+b);
}

sum(4,5);
sum(8,6);
*/

/*
function sum(a,b){
    c=a+b;
    return c;
}

 let val=sum(5,6);
 console.log(val); */

//  modern java-arrow function
/*
 const arroSum=(a,b)=>{
    console.log(a+b);
 };
*/ 
/*
const mulArrow=(a,b)=>{
    return a*b;
}; */

/*
const printHello=()=>{
    console.log("hello");
};*/



// # Craete a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
/*
function countVowels(str){
    let count=0;
    for(const char of str){
      if(char=="a" || char=="e" || char=="i"  || char=="o" || char=="u")
    
     { count++;}
    }
  console.log(count);
} */

//# same with arrow function
/*
const countVow=(str)=>{
    let count=0;
    for(const char of str){
      if(char=="a" || char=="e" || char=="i"  || char=="o" || char=="u")
    
     { count++;}
    }
  console.log(count);
}*/


//foEach Loop in Array
/*
let arr=[1,2,4,5,6,7,8];

arr.forEach(function printVal(val){
    console.log(val);
})*/

//# for a given  array of numbers, print the square of each value using the forEach loop.
/*
let nums=[1,2,3,4,5,6,7,8,9,10];
nums.forEach((num)=>{
    console.log(num*num);
}); */

// #Splice

// let arr=[1,2,3,4,5,6,7,8,9,10];

// arr.slice(2,4);

// console.log(arr);

// Create Array
/*
let heroes=["ironman","hulk","thor","batman"];
for(let hero of heroes){
    console.log(hero);
} */

/*
let marks=[86,97,98,29,89,56];
let sum=0;
for(let val of marks){
    sum+=val;
}

let avg=sum/marks.length;
console.log("Average is=", avg); */


//   #Map


// # Create a new array with the results of some operation. The value its callback returns are used to form new array.
/*
let nums=[67,54,76,25];
nums.map((val)=>{
    return;
});
let calcSquare=(num)=>{
    console.log(num*num);
}; */


/*
calculator using return type
*/
/*
function sum(val1,val2){
   let result=val1+val2;
    return result;
}

let add=sum(10,45);
console.log(add);
*/
/*
function sub(val1,val2){
    let result=val1-val2;
    return result;
}

let minus=sub(30,34);
console.log(minus);
*/

// Multiplication
/*
function mul(val1,val2,val3){
    result=val1*val2*val3;
    return result;
}
let into=mul(34,23,45);
console.log(into);
*/
// Divide
/*
function div(val1,val2){
    result=val1/val2;
    return result;
}
let by=div(12,6);
console.log(by); */

// Modulo
/*
function mod(val1,val2){
    result=val1%val2;
    return result;
}
let modd=mod(34,54);
console.log(modd); */

/*
let score=prompt("Enter a number");
if(score==10 || score==100){
    console.log("Grade A");
}
else if(score==20 || score==90){
    console.log("Grade B");
}

else if(score==30 || score==80){
    console.log("Grade C");
}

else if(score==40 || score==70){
    console.log("Grade D");
}

else if(score==50 || score==60){
    console.log("Grade E");
}
*/
// String
/*
function URL(url,domain){
    let con="https://";
    let result=con+url+domain;
    return result;
}

let jaishreesite=URL('jaishree','.me');
console.log(jaishreesite);  */



