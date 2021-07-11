const fs = require("fs");

//#region readFileSync()
function syncFileSystem() {
  const first = fs.readFileSync("./content/file1.txt", "utf8");
  const second = fs.readFileSync("./content/file2.txt", "utf8");
  const writeFile = fs.writeFileSync(
    "./content/file2.txt",
    `Here is the result:\n ${first}\n ${second}`,
    { flag: "a" }
  );
  console.log(first, "\n", second);
  console.log(writeFile);
}

//#endregion
//#region readFile()
function fileSysteminfo() {
  fs.readFile("./content/fileSystem1.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      const first = data;
      console.log("file-1:", first);
      fs.writeFile(
        "./content/fileSystem2.txt",
        `Copying contentof first file:\n${first}`,
        { flag: "a" },
        (err, data) => {
          if (err) {
            console.log(err.message);
            return;
          } else {
            console.log("data write successful", data);
          }
        }
      );
    }
  });

  fs.writeFile(
    "./content/fileSystem2.txt",
    `Copying content:****`,
    { flag: "a" },
    (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      } else {
        console.log("data write successful", data);
      }
    }
  );
  console.log(fs.readdirSync("./"));
}
//#endregion readFile()

// syncFileSystem();
fileSysteminfo();
