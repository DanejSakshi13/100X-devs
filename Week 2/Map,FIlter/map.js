//given an input array [1,2,3,4,5]
//return an array with all elements multiplied by 2 i.e [2,4,6,8,10]

/* 
UGLY / USUAL way

let initialArray = [1,2,3,4,5];
let newArray = [];
for(let i = 0 ; i < initialArray.length; i++){
    newArray.push(initialArray[i]*2);
}
console.log(initialArray)
console.log(newArray)
*/


//USING MAP
let initialArray = [1,2,3,4,5];
function transform(i){
    return i*2;
}
let ans = initialArray.map(transform)
console.log(ans)