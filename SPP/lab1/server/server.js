const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../client/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "../client/index.ejs"));
});

app.post("/data", (req, res) => {
  let data = req.body;
  console.log("body:", req.body);
  res.send(JSON.stringify(data));
  res.end();
});

app.listen(PORT);
