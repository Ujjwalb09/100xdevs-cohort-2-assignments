const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require("jsonwebtoken");
const secretKey = "jwtKey";

module.exports = {
    jwt,
    secretKey
}


const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const PORT = 3000;

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
