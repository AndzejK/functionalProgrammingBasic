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
console.log(tea4TeamFCC)