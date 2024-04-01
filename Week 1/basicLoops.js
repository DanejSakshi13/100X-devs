//let, var, const, if, if-else, if-elseif-else, for



// Program to greet a person with their first name and last name.
function greet(fname,lname){
    console.log("Hello"+ " " + fname + " " + lname)
}
greet("Sakshi","Danej")


// Program to greet a person based on their gender.
function greetBasedOnGender(gender,name){
    if(gender === 'F'){
        console.log("She is " + name);
    }
    else if(gender === 'M'){
        console.log("He is " + name);
    }
    else{
        console.log("They are " + name);
    }
}
greetBasedOnGender("F","Sakshi");
greetBasedOnGender("M", "Soham")



//Program to print 0-1000
// function numbers(){
// for(let i = 1 ; i <= 1000; i++){
//     console.log(i)
// }
// }
// numbers()


//print even numbers from an array
function evenNumbers(){
let array = [22,56,3,11,90,33,87,44]
for(let i = 0 ; i < array.length; i++){
    if(array[i]%2 == 0){
        console.log(array[i])
    }
}
}
evenNumbers()


//object aggregate
function usingObj(){
const allUsers = [
    {
        "fname" : "Sakshi",
        "gender" : "Female"
    },
    {
        "fname" : "Om",
        "gender" : "Male"   
    },
    {
        "fname" : "Nupoor",
        "gender" : "Female"   
    }
]
for(let i = 0 ; i < allUsers.length; i++){
    if(allUsers[i]["gender"] == "Female"){
        console.log(allUsers[i]["fname"])
    }
}
}
usingObj()


//print largest element from array
function largestNumber(){
    let numbers = [44,21,67,90,43,112,54,23,12,76,99]
    let max = numbers[0]
    for(let i = 0 ; i < numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i];
        }
    }
    console.log(max)
}
largestNumber()



//reverse an array
function revArray(){
    let sampleData = [76,34,12,5554,21,23,6,7,44]
    for(let i = sampleData.length-1; i>0; i--){
        console.log(sampleData[i])
    }
}
revArray()


//function to find sum of two numbers
function sumOfTwoNumbers(num1,num2){
    let ans = num1 + num2
    console.log("Sum = " + ans)
}
sumOfTwoNumbers(4,3)