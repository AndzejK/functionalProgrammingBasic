/*
Functional Programming is another popular approach to software development. 
In Functional Programming, code is organized into smaller, 
basic functions that can be combined to build complex programs
*/

const prepareTea=()=>"greenTea";

const getTea=(numOfCups)=>{
    const teaCups=[];
    for(let cups=1;cups<=numOfCups; cups+=1){
        const teaCup=prepareTea();
        teaCups.push(teaCup)
    } return teaCups;
};

const tea4TeamFCC=getTea(20);
console.log(tea4TeamFCC);

/* ### Terminology
@ Callbacks are the functions that are slipped or passed into another 
function to decide the invocation of that function. 

@ Functions that can be assigned to a variable, passed into another function, 
or returned from another function just like any other normal value, 
are called first class functions. In JavaScript, all functions 
are first class functions.

@ The functions that take a function as an argument, or return a 
function as a return value are called higher order functions.

@ When the functions are passed in to another function or returned from 
another function, then those  functions which gets passed in 
or returned can be called a lambda.
*/

