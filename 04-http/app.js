const http = require("http");
const fs = require("fs");
const { type } = require("os");

http
  .createServer((req, res) => {
    // console.log(http.STATUS_CODES);
    // console.log(req.headers);
    /*  // html/text
    const readStream = fs.createReadStream("./static/index.html");
    res.writeHead(200, { "Content-type": "text/html" }); */

    /*     // application/json
    const readStream = fs.createReadStream("./static/data.json");
    res.writeHead(200, { "Content-type": "application/json" }); */
    // image
    const readStream = fs.createReadStream("./static/img.jpg");
    res.setHeader("cookie", { name: "limon", token: "token" });
    res.writeHead(200, { "Content-type": "image/jpg" });
    readStream.pipe(res);
  })
  .listen(3000, () => console.log("server is running"));
