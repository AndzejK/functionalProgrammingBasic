function autohyphen(resultFromPreviousFn){
    let start="";
    for(let i=0;i<resultFromPreviousFn.length;i++){
        start+="-";
    }
    console.log(start);
}

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
let brokenStr = "The.force.is.strong.with.this.one.test.test1";
autohyphen(sentensify(brokenStr));
console.log(sentensify(brokenStr));
autohyphen(sentensify(brokenStr));

/*
Task #1 - source: freecodecamp
Many content management sites (CMS) have the titles of a post added to part of the URL 
for simple bookmarking purposes. For example, if you write a Medium post titled Stop Using Reduce, 
it's likely the URL would have some form of the title string in it (.../stop-using-reduce). 
*/

let title=" Winter Is  Coming ";

function urlSlug(tit) {
    let seperateWord=[];
    seperateWord=tit.match(/\w+/gm);
   return seperateWord.join("-").toLowerCase();
    
}
autohyphen(urlSlug(title));
console.log(urlSlug(title));
autohyphen(urlSlug(title));
