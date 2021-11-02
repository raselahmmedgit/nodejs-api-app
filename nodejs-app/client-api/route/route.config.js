"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteConfig = void 0;
var RouteConfig = /** @class */ (function () {
    function RouteConfig(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    RouteConfig.prototype.getName = function () {
        return this.name;
    };
    return RouteConfig;
}());
exports.RouteConfig = RouteConfig;
