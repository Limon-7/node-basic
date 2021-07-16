const http = require("http");
const port = 4000;

http
  .createServer((req, res) => {
    res.write(`hello node js server`);
    res.end();
  })
  .listen(port, () => console.log(`server is running on port:${port}`));
