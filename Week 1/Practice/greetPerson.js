/*Add a method to the person object from problem 4 that logs a greeting to the console using the person's name. */

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
    console.log("Hello " + person[i].name)
}
