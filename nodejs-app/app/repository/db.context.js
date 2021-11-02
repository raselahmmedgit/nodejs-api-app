"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbContext = void 0;
var sequelize_1 = require("sequelize");
var tsyringe_1 = require("tsyringe");
var appsettings_service_1 = require("../service/appsettings.service");
var DbContext = /** @class */ (function () {
    function DbContext(appSettingsService) {
        this.appSettingsService = appSettingsService;
        var result = appSettingsService.GetSettings();
        this.Context = new sequelize_1.Sequelize({
            dialect: result.Dialect,
            host: result.DatabaseHost,
            port: result.DatabasePort,
            username: result.DatabaseUsername,
            password: result.DatabasePassword,
            database: result.DatabaseName
        });
        //this.Context = new Sequelize("mysql://rasel:123456@localhost:3306/nodejs_db");
    }
    DbContext = __decorate([
        (0, tsyringe_1.singleton)(),
        __metadata("design:paramtypes", [appsettings_service_1.AppSettingsService])
    ], DbContext);
    return DbContext;
}());
exports.DbContext = DbContext;
