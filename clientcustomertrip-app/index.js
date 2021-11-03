"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var appConfig_1 = require("./config/appConfig");
var homeController_1 = __importDefault(require("./controller/homeController"));
var app = (0, express_1.default)();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'views')));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Declare application home router
app.use('/', homeController_1.default);
app.use('/CustomerTripAPI/operationalPnr', homeController_1.default);
//Declare application home router
var port = appConfig_1.appConfig.AppPort;
var host = appConfig_1.appConfig.AppHost;
app.listen(port, host, function () {
    console.log("CTEDS Server listing at http://" + host + ":" + port);
});
