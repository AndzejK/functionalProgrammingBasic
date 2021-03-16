/*
The some method works with arrays to check if any element passes a particular test. 
It returns a Boolean value - true if any of the values meet the criteria, false if not.
*/

let randimArr=[1, 2, 3, -4, 5];
function checkPositive(arr){
    return arr.some(x=>x>-1);
}

console.log(checkPositive(randimArr)); //true