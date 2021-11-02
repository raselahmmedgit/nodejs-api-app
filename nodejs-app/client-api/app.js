"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var home_controller_1 = __importDefault(require("./controller/home.controller"));
var tsyringe_1 = require("tsyringe");
var appsettings_service_1 = require("./../app/service/appsettings.service");
var auth_route_1 = require("./route/auth.route");
var routes = [];
var app = (0, express_1.default)();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'view')));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Declare application home router
app.use('/', home_controller_1.default);
app.use('/CustomerTripAPI/operationalPnr', home_controller_1.default);
//Declare application home router
//Declare application auth router
routes.push(new auth_route_1.AuthRoutes(app));
//Declare application auth router
var settingService = tsyringe_1.container.resolve(appsettings_service_1.AppSettingsService);
var setting = settingService.GetSettings();
var port = setting.AppPort;
var host = setting.AppHost;
app.listen(port, host, function () {
    console.log("Server listing at http://" + host + ":" + port);
});
