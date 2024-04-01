/*Write a function that takes an array of numbers and returns a new array with only the unique values
(remove duplicates). */

function noDuplicates(array){
    let newArr = new Set(array);
    return newArr;
}
let ans = noDuplicates([1,2,2,3,4,5,5,3,2,4]);
console.log(ans)