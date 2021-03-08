let anArr = [5, 10, 15, 20, 25];

//My own Array.prototype.myFilter() method;

Array.prototype.myFilter=function(callback) {
    let myFilterArr=[];
    for(let i=0;this.length>i;i++){
        if(callback(this[i])) {
            myFilterArr.push(this[i]);
        }
    }
    return myFilterArr;
}

let modArr = anArr.myFilter(x=>x%2===1);
console.log(anArr);
console.log(modArr);