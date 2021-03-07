/*
    ##### Implement map on a Prototype
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using "this".
*/

let s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    let newArray = [];
       for (i=0;i<this.length;i++){ //instead having static arr, "s", I should use "this"
           newArray.push(callback(this[i])); // at that stage, when the method pushes an item to a new array, I should apply a callback, what to do with this item, again using external funcation!
       }
    
    return newArray;
};

let new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s)

/*
    ##### More about "this"
=> "this" is the global object (window in a browser)in a function invocation.
=> The context of the inner function (except arrow function) depends only on its own invocation type, but not on the outer function’s context.
 psuedo code:
    someObj {
        some var,
        some method: function(){
            this===someObj //true;
        function(){
            this===someObj //false
            }
        },
        arrFun = ()=>{
            this===someObj //true;
        }
    }
*/

function add(a,b){
    //.log(this===window);
    this.myNum=8;
    return console.log(a+b),console.log(myNum);
}

add(4,8);//12,8
console.log(myNum);//8