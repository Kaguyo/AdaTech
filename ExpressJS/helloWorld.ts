import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import { readFileSync } from 'fs';

config();
const app = express();
app.use('/client', express.static(path.join(__dirname, 'public')));
const PORT = process.env.API_PORT;
const URL = process.env.API_BASE_URL;

app.get('/', (request, response) => {
    const homePagePath = path.join(__dirname, "public", "index.html");
    const homePage = readFileSync(homePagePath);
    
    //response.status(200).send(homePage);
});

app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${URL}${PORT}`);
});