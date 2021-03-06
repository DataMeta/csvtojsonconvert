let csv = require("csvtojson"),
    fs = require("fs"),
    path = require('path')

const args = process.argv.slice(2);

sourceFileName = args[0];
destinationFileName = args[1];

const srcfilepath = path.join(__dirname, sourceFileName);
const destfilepath = path.join(__dirname, destinationFileName);

const readStream = fs.createReadStream(srcfilepath);
const writeStream = fs.createWriteStream(destfilepath);

readStream.pipe(csv()).pipe(writeStream)
