import "reflect-metadata";
import express from "express";
import "./database";

const app = express();


//  Tipos de parametrõs
// Route Prams => http://localhost:300/prudots/12
// Query Params => https://localhost:300/produtos?name=telcado
//body params => {
// "name": "teclado",
// "description": "teclado bom"
//}
app.listen(3001, () => console.log('Server is runnig'));