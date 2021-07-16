// A BASIC Node server

const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(http.request);
  res.setHeader("Content-type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200); //status code HTTP 200 / OK

  let dataObj = [
    { id: 123, name: "Bob", email: "bob@work.org" },
    { id: 1234, name: "Martin", email: "martin@work.org" },
  ];
  let data = JSON.stringify(dataObj);
  res.end(data);
});

server.listen(3000, function () {
  console.log("Listening on port 3000");
});
