const path = require("node:path");
const fs = require("node:fs");

const filePath = path.join(process.cwd(), 'texto.txt');

fs.readFile(filePath);

console.log(filePath);