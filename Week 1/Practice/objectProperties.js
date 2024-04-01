/*Create an object representing a person with properties like name, age, and address. 
Write a function to loop through the object and log each property to the console. */

person = [
    {
        "name" : "Sakshi",
        "age" : 20,
        "address" : "Nashik"
    },
    {
        "name" : "Nupoor",
        "age" : 16,
        "address" : "Pune"
    },
    {
        "name" : "Savita",
        "age" : 44,
        "address" : "Yeola"
    },
]
for(let i = 0 ; i < person.length; i++){
    console.log(person[i])
}
// console.log(person)