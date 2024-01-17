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

let add=sum(10,25);
console.log(add); */

function cal(val1,val2){
    let add=val1+val2;
    let sub=val1-val2;
    let mul=val1*val2;
    let div=val1/val2;
    let mod=val1%val2;

    }

    console.log(add);
    console.log(sub);
    console.log(mul);
    console.log(mod);
    console.log(div);

add(10,20);























 
