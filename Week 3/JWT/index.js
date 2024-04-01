const jwt = require("jsonwebtoken");

const value = {
    name: "Sakshi",
    accountNumber: 12345
}

//jwt
const token = jwt.sign(value, 'secret');
console.log(token)

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2Frc2hpIiwiYWNjb3VudE51bWJlciI6MTIzNDUsImlhdCI6MTcwNjgxMzgyNH0.U2iQ3juoc5_8WBN9sAsX1P8c4-Q99gxT4x_vkUAUpCk