const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get("/name", (req, res) => {
  res.send("Ashik");
});

app.listen(5000, () => console.log("Server is runnning on port 5000"));
