const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const noteRouter = require("./routes/noteRoute");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Notes API by kundan kumavat");
});

app.use("/users", userRouter);
app.use("/notes", noteRouter);

const port = process.env.port || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(port, () => {
        console.log("Server started on port no." + port);
    });
})
.catch((err) => {
    console.log(err);
});