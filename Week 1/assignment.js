//counter in javascript - count down from 30 to 0
// let count = 31
// let counter = setInterval(
//     function(){
//         count--
//         console.log(count)
//         if(count==0){
//             clearInterval(counter)
//             console.log("Time up")
//         }
//     },500)


//create a terminal clock (HH:MM:SS)
let hourCounter = 25
let minuteCounter = 61
let secondCounter = 61
let clock = setInterval(
    function(){
        secondCounter--
        console.log(hourCounter + " : " + minuteCounter + " : " + secondCounter)
        if(secondCounter===0){
            clearInterval(clock)
        }
    }
    ,1000
)