"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutModel = void 0;
var LogoutModel = /** @class */ (function () {
    function LogoutModel(email, password, token) {
        this.Email = email;
        this.Password = password;
        this.Token = token;
    }
    return LogoutModel;
}());
exports.LogoutModel = LogoutModel;
