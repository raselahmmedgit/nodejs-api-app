import cors from 'cors';
import express from 'express';
import path from 'path';
import homeController from "./controller/home-controller";
import {container} from "tsyringe";
import { AppSettingsService } from "./../app/service/app-settings-service";

import { RouteConfig } from "./route/route-config";
import { AuthRoutes } from "./route/auth-route";
const routes: Array<RouteConfig> = [];

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'view')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Declare application home router
app.use('/', homeController);
//Declare application home router

//Declare application auth router
routes.push(new AuthRoutes(app));
//Declare application auth router

const settingService = container.resolve(AppSettingsService);
const setting = settingService.GetSettings();
const port = setting.AppPort;
const host = setting.AppHost;

app.listen(port, host, () => {
    console.log(`Server listing at http://${host}:${port}`);
});