const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.get("/", (req, res) => {
  res.json({ Info: "Welcome to Express/Postgre API Page" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/getcites", db.getCities);
app.get("/getcity/:id", db.getOneCity);
app.post("/city", db.postCity);
