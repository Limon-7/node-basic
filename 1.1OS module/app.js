const os = require("os");
const path = require("path");
//#region os module
function osInfo() {
  console.log(os.hostname());
  console.log(os.arch()); // return the operating system CPU architecture
  console.log(os.cpus()); // return the  CPU architecture
  console.log(os.loadavg());
  console.log(os.networkInterfaces());
  console.log(os.userInfo());
  const systemInfo = {
    user: os.userInfo(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    releaseDate: os.release(),
    os: os.type(),
  };
  console.log(systemInfo);
}
//#endregion os module

//#region path module
function pathInfo() {
  console.log(path);
  console.log(path.sep); //The platform-specific file separator. '\\' or '/'
  /** 
  Join all arguments together and normalize the resulting path.
  @params Arguments must be strings. 
  */
  console.log(path.join("/contents", "menu", "menu.txt"));
  console.log(path.basename(path.join("/contents", "menu", "menu.txt")));
  console.log(
    "dirname:",
    path.dirname(path.join("/contents", "menu", "menu.txt"))
  );
  console.log(path.resolve(__dirname, "/contents", "menu", "menu.txt")); //absollute path
  //   console.log(path.dirname()); //Return the directory name of a path. Similar to the Unix dirname command.
}
//#endregion path module
// osInfo();
pathInfo();
