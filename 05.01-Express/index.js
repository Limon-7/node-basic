const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const logger = require("./logger");
const app = express();

// it will perse body of request with json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("development:", process.env.NODE_ENV);
}

app.use(logger.log);
app.use(logger.logauthenticate);
console.log(process.env.NODE_ENV);
const courses = [
  { id: 1, name: "C#" },
  { id: 2, name: "C++" },
  { id: 3, name: "python" },
];

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(courses);
});
app.listen(300, () => console.log("server open port number: 300"));
