/*
source: freecodecamp
You need to complete the code for the squareList function using any combination of map(), filter(), 
and reduce() so that it returns a new array containing only the square of only the positive integers 
(decimal numbers are not integers) when an array of real numbers is passed to it
*/
const squareList = arr => {
    // #1 the only positive number and can find it by using comparison operators ">""<";
    // #2 just whole a number from 0 till 9, for instance, 4.8 we should skip it, so far so don't know how to seperate it;
    // #3 just signle integer not decimal and higher nominal, for example, 10 or 111 skip them so more than <10;
    let positiveIntegersArr=arr.filter(x=>{
        return(x>=0&&!(x%1)) //Might this point is important to solve this task. 
        });
       
    return positiveIntegersArr.map(y=>y*y);
  };
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers);