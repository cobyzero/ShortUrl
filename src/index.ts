import { database } from "./database";
import { app } from "./express";
import './Models/urlModel';

const PORT = 80;
export const URL = "localhost/";

async function main() {
    await app.listen(PORT);
    await database.sync();

   
}

main();