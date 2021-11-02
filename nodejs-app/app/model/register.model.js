"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterModel = void 0;
var RegisterModel = /** @class */ (function () {
    function RegisterModel(email, password, confirmPassword, roleName) {
        this.Email = email;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
        this.RoleName = roleName;
    }
    return RegisterModel;
}());
exports.RegisterModel = RegisterModel;
