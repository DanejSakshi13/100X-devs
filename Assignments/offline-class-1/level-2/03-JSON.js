function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);














//JSON parse : JS string to object
// const users ='{"name" : "Sakshi","age" : 20,"gender" : "female"}'
// const user = JSON.parse(users)
// console.log(user["name"])


//JSON stringify : JS object to string
// const user = {
//   name : "Sakshi",
//   age : 20,
//   gender : "female"
// }
// const final = JSON.stringify(user);
// console.log(final)