const express = require("express");
const {connectDB} = require("./config/db.config");
const userRouter = require("./router/user.router");
const contactRouter = require("./router/contact.router");
const errorHandler = require("./middleware/errorHandler.middleware");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use("/api/users",userRouter);
app.use("/api/contacts", contactRouter);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running successfully at port ${PORT}`);
})
