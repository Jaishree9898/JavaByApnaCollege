// Create Arrays
/*
let heroes=["ironman","hulk","thor","batman"];
console.log(heroes) */
/*
let marks=[89,23,55,21,88,43];
console.log(marks); */

/*
let cities=["delhi","gwalior","mumbai", "gurgaon"];
for(let city of cities){
    console.log(city);
} */

/*

let marks=[85,34,57,23,86,24];
let sum=0;
for(let val of marks){
    sum+=val;
} 
let avg=sum/marks.length;
console.log(`average marks of the class ${avg}`); */



// #for a given array with prices of 5 items
//[250,645,300,900,500]
// All items have an offer of 10% off on them change the array to store final price after applying offer.

/*
let items=[100,200,300,400,500];
let i=0;
for(let val of items){
    console.log(`Value at index ${i}=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer=${items[i]}`); 
    i++;
} */

// or
/*
let items=[100,200,300,400,500];
for(let i=0; i<items.length; i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);
*/

// Array Methods

//push():add to end
/*
let items=["Apple","Banana","Orange","Guava","Strawbeery"];
items.push("Licthi","Papaya")
items.pop();
console.log(items.toString());
console.log(items); */

/*  #concat
let fruits=["Apple","Banana","Orange","Guava","Strawbeery"];
let veggies=["patato","brinjal","beans","chilly"]

let mix=fruits.concat(veggies);
console.log(mix); */

//let fruits=["Apple","Banana","Orange","Guava","Strawbeery"];
//fruits.unshift("grapes")
//fruits.shift()
/*
console.log(fruits);
console.log(fruits.slice(0,4));
console.log(fruits.splice(3,1)); */

// #splice

/*
let arr=[1,2,3,4,5,6,7,8,9,10];
//arr.splice(2,2,101,102);
//arr.splice(3,2,101,103)
//arr.splice(2,0,101);
//arr.splice(2,0,101,102);
arr.splice(2,2);
console.log(arr);  */

// #Create an arry to store companies->
// "Bloomburg","Microsoft","Uber","Google","IBM","Netflix"
// a.Remove the first company from the array.
// b.Remove Uber & add ola in it's place.
// c. Add Amazon at the end.

/*
let companies=["Bloomburg","Microsoft","Uber","Google","IBM","Netflix"];
//companies.shift();
//companies.splice(2,1,"ola")
companies.push("Amazon")
console.log(companies); */























