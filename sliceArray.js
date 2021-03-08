/*
source: www.freecodecamp.org
Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
*/

function sliceArray(anim, beginSlice, endSlice) {
    let modArr=[];
    modArr= anim.slice(beginSlice,endSlice);
    return modArr;
  }
  let inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
 console.log(sliceArray(inputAnim, 1, 3));