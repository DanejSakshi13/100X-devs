/* concise syntax to write anonymous function */

//question - to print all even numbers from an input array

let array = [1,2,3,4,5];
let ans = array.filter((n)=>{
    if(n%2===0){return true;}
    else{return false;}
})
console.log(ans)