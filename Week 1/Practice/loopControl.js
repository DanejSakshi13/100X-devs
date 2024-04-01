/*Write a loop that iterates over an array of numbers. If it encounters a number greater than 50, break
out of the loop. */

let array = [1,2,300,2,3,1,80,4,45,443];
let newArray = [];
for(let i = 0 ; i < array.length; i++){
    if(array[i]>50){
        break;
    }
    newArray.push(array[i]);
}
console.log(newArray)