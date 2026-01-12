const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

//routed
app.use("/user", require("./routes/route"))

app.get("/", (req,res) => {
    res.send("API is running")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server running at Port ${PORT}`)
})