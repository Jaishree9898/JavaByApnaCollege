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
*/

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

myFuntion("jaishree"); //arguement*/

// Create a function sum of two numbers.
/*
function sum(a,b){
    console.log(a+b);
}

sum(4,5); */
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


let nums=[1,2,3,4,5,6,7,8,9,10];
nums.forEach((num)=>{
    console.log(num*num);
});







 
