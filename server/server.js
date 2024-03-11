const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { mongoDbUrL, PORT } = require("./config/configuration");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Job = require("./models/JobSchema");
const Alumni = require("./models/AlumniSchema");
const News = require('./models/NewsSchema')
const Message = require('./models/MessageSchema');
const Event = require("./models/EventSchema");
const Conversation  =require('./models/Conversation')

const SingupLoginroutes = require("./routes/SingupLoginroutes");
const Alumniroutes = require("./routes/Alumniroutes");
const dashboardroutes = require('./routes/Dashboardroutes');
const ConversationRoutes = require('./routes/Conversation')

const multer = require("multer");
const upload = multer({ dest: "uploads/" });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());

mongoose.connect(mongoDbUrL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});


app.use("/alumni", Alumniroutes);
app.use("/", SingupLoginroutes);
app.use('/dashboard',dashboardroutes);
app.use('/conversation',ConversationRoutes)

app.get('/get-user-details', async (req, res) => {
  const { friendEmail } = req.query;

  try {
    const alumniUser = await Alumni.findOne({ Email: friendEmail });
    if (alumniUser) {
      return res.json(alumniUser);
    }

    const studentUser = await Student.findOne({ Email: friendEmail });
    if (studentUser) {
      return res.json(studentUser);
    }

    res.json(null);
  } catch (err) {

  }
});

app.listen(PORT, () => {
  console.log("app is listening at " + `http://localhost:${PORT}`);
});
