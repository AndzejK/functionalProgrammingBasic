function printDash(){
    let dash="-";
    for (let i=0;i<20;i++){
        dash+="-"
    }
    console.log(dash);
}

const numbers = [1,-1,2,3,4]
// get sum of the array
let sum=0; // it's similiar to reduce method's accumulator's parametor
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i]; //accumulator
}
console.log(sum);
printDash();

//same resulat using reduce method
/*
array.reduce(callback(1parCallback/accu, 2parCallback/currVal, [3parCallback/index,4parCallback/array]),2par/initialValue)
*/
const sumReduceMethod = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)
console.log(sumReduceMethod)