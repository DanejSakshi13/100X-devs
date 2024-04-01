/*given an input array, give back all the even values from it */

/*
USUAL METHOD 
const array = [1,2,3,4,5];
const newArray = [];

for(let i = 0 ; i < array.length; i++){
    if(array[i]%2===0){
        newArray.push(array[i])
    }
}
console.log(array)
console.log(newArray)
*/

/*USING FILTERS - method 1
const array = [1,2,3,4,5]
function filterLogic(n){
    if(n%2===0){return true;}
    else{return false;}
}
let ans = array.filter(filterLogic);
console.log(ans)
*/

/*USING FILTERS - method 2 - anonymous function */
const array = [1,2,3,4,5]
let ans = array.filter(function(n){
    if(n%2===0){return true;}
    else{return false;}
});
console.log(ans)