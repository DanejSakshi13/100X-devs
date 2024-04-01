/*Implement a basic calculator that can perform addition, subtraction, multiplication, and division 
based on user input. */

function calculator(num1, num2, op){
    if(op== "+"){
        return num1+num2;
    }
    else if(op== "-"){
        return num1-num2;
    }
    else if(op== "*"){
        return num1*num2;
    }
    else if(op== "/"){
        return num1/num2;
    }
    else {
        return "Invalid Operation";
    }
}

// let ans = calculator(12,2,"+");
// let ans = calculator(12,2,"-");
// let ans = calculator(12,2,"*");
// let ans = calculator(12,2,"/");

console.log(ans)