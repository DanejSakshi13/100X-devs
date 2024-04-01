/*Given an array of numbers, use a loop to create a new array where each element is squared. */
let array = [1,2,3,4,5,6,7,8,9,10];
let sqArray = [];
for(let i = 0 ; i < array.length; i++ ){
    let sq = array[i]*array[i];
    sqArray.push(sq);
}
console.log(sqArray)
