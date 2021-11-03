import cors from 'cors';
import express from 'express';
import path from 'path';
import { appConfig } from "./config/appConfig";
import homeController from "./controller/homeController";

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Declare application home router
app.use('/', homeController);
app.use('/CustomerTripAPI/operationalPnr', homeController);
//Declare application home router

const port = appConfig.AppPort;
const host = appConfig.AppHost;

app.listen(port, host, () => {
    console.log(`CTEDS Server listing at http://${host}:${port}`);
});