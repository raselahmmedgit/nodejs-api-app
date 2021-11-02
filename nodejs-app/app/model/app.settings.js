"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettings = void 0;
var AppSettings = /** @class */ (function () {
    function AppSettings(appHost, appPort, databaseHost, databasePort, databaseUsername, databasePassword, databaseName, dialect) {
        this.AppHost = appHost;
        this.AppPort = appPort;
        this.DatabaseHost = databaseHost;
        this.DatabasePort = databasePort;
        this.DatabaseUsername = databaseUsername;
        this.DatabasePassword = databasePassword;
        this.DatabaseName = databaseName;
        this.Dialect = dialect;
    }
    return AppSettings;
}());
exports.AppSettings = AppSettings;
