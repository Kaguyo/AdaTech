"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use('/client', express_1.default.static(path_1.default.join(__dirname, 'public')));
const PORT = process.env.API_PORT;
const URL = process.env.API_BASE_URL;
app.get('/', (request, response) => {
    const homePagePath = path_1.default.join(__dirname, "public", "index.html");
    const homePage = (0, fs_1.readFileSync)(homePagePath);
    //response.status(200).send(homePage);
});
app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${URL}${PORT}`);
});
