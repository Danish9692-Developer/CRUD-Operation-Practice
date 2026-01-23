const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log("MongoDB Connected"))
 .catch((err) => console.log(err));

//routed
app.use("/student", require("./routes/route"))

app.get("/", (req, res) => {
 res.send("API is running")
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log(`server is running at port ${PORT}`)
});