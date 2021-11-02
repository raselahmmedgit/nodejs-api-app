"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettingsService = void 0;
var tsyringe_1 = require("tsyringe");
var app_config_1 = require("../config/app.config");
var db_config_1 = require("../config/db.config");
var AppSettingsService = /** @class */ (function () {
    function AppSettingsService() {
    }
    AppSettingsService.prototype.GetSettings = function () {
        var settings = {
            AppHost: app_config_1.AppConfig.AppHost,
            AppPort: app_config_1.AppConfig.AppPort,
            DatabaseHost: db_config_1.DbConfig.DatabaseHost,
            DatabasePort: db_config_1.DbConfig.DatabasePort,
            DatabaseUsername: db_config_1.DbConfig.DatabaseUsername,
            DatabasePassword: db_config_1.DbConfig.DatabasePassword,
            DatabaseName: db_config_1.DbConfig.DatabaseName,
            Dialect: db_config_1.DbConfig.Dialect,
        };
        return settings;
    };
    AppSettingsService = __decorate([
        (0, tsyringe_1.singleton)()
    ], AppSettingsService);
    return AppSettingsService;
}());
exports.AppSettingsService = AppSettingsService;
