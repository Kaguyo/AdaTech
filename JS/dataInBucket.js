const path = require("node:path");
const fs = require("node:fs");
const dotenv = require("dotenv");
dotenv.config();


filePath = path.join(process.cwd(), 'texto.txt');

console.log(filePath);

console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`);