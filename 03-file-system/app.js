// node process is a single thread
// syncornopus -blocking:
// asyncornus method-non blocking: always use asy method

const fs = require("fs");

fs.writeFile("example2.txt", "this is a single file system", (err) => {
  if (err) {
    console.log("file not created");
  } else {
    console.log("file created succesfully");
    fs.readFile("example2.txt", "utf8", (err, data) => {
      if (err) {
        console.log("invalid format");
      } else {
        console.log(data);
      }
    });
  }
});

fs.writeFile("rename.txt", "writeline", (err) => {
  if (err) throw err;
  else {
    console.log("file---created successfully");
    fs.rename("rename.txt", "text.txt", (err) => {
      if (err) throw err;
      else {
        console.log("rename successfully");
      }
    });
  }
});
// deleted file
/* 
fs.unlink("text.txt", (err) => {
  if (err) throw err;
  else {
    console.log("text.txt file successfully delated");
  }
});
 */
// end of file

// create directory
fs.mkdir("tutorial", (err) => {
  if (err) {
    if (err.code == "EEXIST") {
      fs.rmdir("tutorial", (err) => {
        if (err.code == "ENOTEMPTY") {
          fs.unlink("./tutorial/text.txt", (err) => {
            if (err) throw err;
            else {
              console.log("delete succefull");
            }
          });
        }
      });
    }
  } else {
    console.log("Folder created successfully");
    fs.writeFile("./tutorial/text.txt", "Folder with data", (err) => {
      if (err) throw err;
      else {
        console.log("create successfully");
        fs.readFile("./tutorial/text.txt", "utf8", (err, data) => {
          if (err) throw err;
          else {
            console.log("Data", data);
            setTimeout(() => {
              fs.rmdir("tutorial", (err) => {
                if (err) throw err;
                else {
                  console.log("remove directory succesfully");
                }
              });
            }, 1000);
          }
        });
      }
    });
  }
});
fs.readdir("./", function (err, file) {
  if (err) {
    console.log("error occoured", err);
  } else {
    console.log(file);
  }
});
