const express = require("express");
const app = express();
const router = express.Router();
const Alumni = require('../models/AlumniSchema');

router.get('/',(req,res)=>{
    Alumni.find()
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "No data found" });
      }
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
})


module.exports = router;