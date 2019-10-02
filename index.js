const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./queries");

app.get("/", (req, res) => {
  res.json({ Info: "Welcome to Express/Postgre API Page" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/getCustomers", db.getCustomers);
app.get('/getOneCustomer/:id', db.getOneCustomer);
