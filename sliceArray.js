function printDash(){
    let dash="-";
    for (let i=0;i<20;i++){
        dash+="-"
    }
    console.log(dash);
}

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
 printDash();
 /*
 source: www.freecodecamp.org
 Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.
 */

 function nonMutatingSplice(citiesArr){
     //Using slice method to return 1st free items from the array
    let arr3items=[];
    arr3items= citiesArr.slice(0,3)
    return console.log(arr3items);
 }

 let inputCities=["Sydney", "Vilnius", "New York", "London"];
 nonMutatingSplice(inputCities);
 printDash();