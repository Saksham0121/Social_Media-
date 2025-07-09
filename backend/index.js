const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer")
const cors = require("cors");
const path  = require("path");

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use("/images", express.static(path.join(__dirname, "public/images")));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); 
  },
  filename: (req,file,cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
  try{
    return res.status(200).json("File uploaded successfully");
  }catch(err){
    console.log(err);
  }
})

// Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// Start server
app.listen(8800, () => {
  console.log("Backend server is running!");
});
