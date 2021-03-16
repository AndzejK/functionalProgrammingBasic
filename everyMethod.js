/*
The every method works with arrays to check if every element passes a particular test. 
It returns a Boolean value - true if ALL values meet the criteria, false if not.
*/

let randimArr=[1, 2, 3, -4, 5];
function checkPositive(arr){
    return arr.every(x=>x>-1);
}

console.log(checkPositive(randimArr));