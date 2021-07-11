const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./large3.txt", "utf8");
const writeStream = fs.createWriteStream("large.txt");

/* 
alternative way
readStream.on("data", (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});  */
// pipe stream get a source stream and a destination stream
readStream.pipe(writeStream);

// // pipe chaining
// const gzip = zlib.createGzip();
// const readStream1 = fs.createReadStream("./large.txt", "utf8");
// const writeStream1 = fs.createWriteStream("large2.txt.zip");

// readStream1.pipe(gzip).pipe(writeStream1);

// // unzip
// const gunzip = zlib.createGunzip();
// setTimeout(() => {
//   const readStreamUnzip = fs.createReadStream("./large2.txt.zip");
//   const writeStreamUnzip = fs.createWriteStream("uncompressed.txt");
//   readStreamUnzip.pipe(gunzip).pipe(writeStreamUnzip);
// }, 2000);
