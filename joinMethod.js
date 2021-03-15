/*
source: freecodecamp.org
The join method is used to join the elements of an array together to create a string. 
It takes an argument for the delimiter that is used to separate the array elements in the string.
*/

function sentensify(str){
    let sentesifyArr=[];
    let result="";
    let regExp=/\W/;
    sentesifyArr=str.split(regExp);
    result=sentesifyArr.join(" ");
    return result;
}
let brokenStr = "The.force.is.strong.with.this.one";
console.log(sentensify(brokenStr));