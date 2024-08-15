const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

router.get('/', (req, res) => {
    console.log("Router Working");
    res.send("Router Working");
});

router.use('/user', userRouter);
router.use('/account', accountRouter);

module.exports = router;
