const express = require("express");
const { Users, Account } = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = express.Router();
const { authMiddleware } = require("../middleware");

//signup - POST method
const signupBody = zod.object({
  username: zod.string().email(),
firstName: zod.string(),
lastName: zod.string(),
password: zod.string()
})

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body)
  if (!success) {
      return res.status(411).json({
          message: "Email already taken / Incorrect inputs"
      })
  }

  const existingUser = await Users.findOne({
      username: req.body.username
  })

  if (existingUser) {
      return res.status(411).json({
          message: "Email already taken/Incorrect inputs"
      })
  }

  const user = await Users.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
  })
  const userId = user._id;

  await Account.create({
      userId,
      balance: 1 + Math.random() * 10000
  })

  const token = jwt.sign({
      userId
  }, JWT_SECRET);

  res.json({
      message: "User created successfully",
      token: token
  })
})


const signinBody = zod.object({
  username: zod.string().email(),
password: zod.string()
})


//signin - POST method
const SignInSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res, next) => {
  const body = req.body;
  const { success } = SignInSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect input",
    });
  }

  const user = await Users.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error logging in",
  });
});

//optional update
const updateSchema = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res, next) => {
  const { success } = updateSchema.safeParse(req, res);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }
  await Users.updateOne({ _id: req.userId }, req.body);

  return res.status(200).json({
    message: "Updated successfully",
  });
});

//get users from the backend, filterable via firstName/lastName
router.get("/bulk", async (req, res, next) => {
  const filter = req.query.filter || "";

  const users = await Users.find({
    $or: [
      {
        users: [
          {
            firstName: { $regex: filter },
            lastName: { $regex: filter },
          },
        ],
      },
    ],
  });
  res.json({
    user: users.map((user) => {
      username: user.username;
      lastName: user.lastName;
      firstName: user.firstName;
      _id: user._id;
    }),
  });
});

module.exports = router;












//Sakshi Danej - danejsakshi@test.com - 123
//Nupoor Gupta - guptanupoor@test.com - 786
//Savita Ganesh = savitaganesh@test.com - 12345