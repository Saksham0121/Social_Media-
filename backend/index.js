const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config();


// MongoDB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

// Middlewares
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users" , userRoute)
app.use("/api/auth" , authRoute)

// Start server
app.listen(8800, () => {
    console.log("Backend server is running!");
});
