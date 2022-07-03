const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/name", (req, res) => {
  res.send("Ashik");
});

app.listen(5000, () => console.log("Server is runnning on port 5000"));
