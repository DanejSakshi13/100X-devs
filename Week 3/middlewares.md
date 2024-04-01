Prechecks for any platform
*authentication*
*input validation*


**middleware :**
A function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.



early returning


----------------------------------------------------------------------------------------------
**If this is the code to carry multiple operations like user-auth, kidney-chekcup, heartcheckup and only then further opertions can be performed, one cant write the same auth code for every route , therefore functions are used to write the repeating auth mechanisms . For example - to cary our heart-checkup , user-auth is requried but kidney-checkup isnt requried , therefore we can only call the user-auth function in that case**
**hence middlewares come into place and importance (reduces loc and doesnt violate DRY)**
const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "sakshi" || password != "123") {
    res.status(400).json({ msg: "Wrong input" })
    return
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Wrong input" })
    return
  }
  res.json({
    msg: "Fine"
  })
});


app.listen(3000);
--------------------------------------------------------------------------------------------------------
**Function/advantages of middlesware**
Middleware functions can perform various tasks such as modifying the request or response objects, ending the request-response cycle, and calling the next middleware function in the stack.
-------------------------------------------------------------------------------------------------
**Example of middlewares in Nodejs**
const express = require("express");
const app = express();

// Custom middleware function
const logRequest = (req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.path}`);
  next(); // Call the next middleware function in the stack
};

// Using the middleware for all routes
app.use(logRequest);

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, Middleware!");
});

// Another middleware function
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

// Using the error handler middleware
app.use(errorHandler);

// Server listening on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


---------------------In this example:
The logRequest middleware logs information about each incoming request.
The app.use(logRequest) line adds the logRequest middleware to be executed for all routes.
The main route handler (app.get("/")) is followed by another middleware (errorHandler) that handles errors.
Middleware functions are executed in the order they are added using app.use() or similar methods.
---------------------






**Global catches** - error handling middleware - 4 parameters
This middleware is placed at a high level in the middleware stack, typically after other middlewares and route handlers in the request-response lifecycle.


const express = require("express");
const app = express();
app.use(express.json);
app.get("/health-checkup", function (req, res) {
  const kidneys = req.query.kidneys;
  const kidneyNum = req.query.kidneyNum;
res.send("you have"+kidney.length+"kidneys);
});

__//global catch__
app.use(function(err,req,res,next){
  res.json({
    msg:"Sorry , server down
  })
})
app.listen(3000);


*The next parameter is used to pass the error to the next error-handling middleware in the stack.*s
