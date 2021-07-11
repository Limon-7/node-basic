const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
// static file serve
// middleware
app.use("/public", express.static(path.join(__dirname, "/static")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/static", "index.html"));
});
app.get("/example", (req, res) => {
  res.send("Example page");
});
app.get("/example/:name/:id", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`params with name: ${req.params.name} id:${req.params.id}`);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("successfully send");
});
app.listen(3000);
console.log("express listen to ...3000");
