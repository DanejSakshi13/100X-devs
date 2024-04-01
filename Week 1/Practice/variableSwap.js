/*Given two variables, a and b, swap their values without using a temporary variable. */

var a = 4;
var b = 9
console.log("Before swap "+"\na=" + a + " \nb=" + b)
let temp = a;
a = b;
b = temp;
console.log("\After swap "+"\na=" + a + " \nb=" + b)
