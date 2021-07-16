const fs = require("fs");
const util = require("util");

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

//#region Async/promise
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function usingPromise() {
  readFileAsync("./content/fileSystem2.txt")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
//#endregion Async/promise

// using await/async
const start = async () => {
  try {
    let first = await readFileAsync("./content/fileSystem2.txt");
    console.log(first);
  } catch (error) {
    console.log(err);
  }
};

//#region  using Promisfy
const promisifyInfo = async () => {
  const readFileOnePromise = util.promisify(fs.readFile);
  let f1 = await readFileOnePromise("./content/fileSystem1.txt", "utf8");
  console.log("promisify:??\n", f1);
};

//#endregion
// syncFileSystem();
//  fileSysteminfo();
// usingPromise();
// start();
promisifyInfo();
