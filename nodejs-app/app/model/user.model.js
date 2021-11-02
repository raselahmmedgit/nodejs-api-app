"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var uc = require('upper-case');
var UserModel = /** @class */ (function () {
    function UserModel(Id, userName, email, password) {
        this.Id = Id;
        this.UserName = userName;
        this.NormalizedUserName = uc.upperCase(userName);
        this.Email = email;
        this.NormalizedEmail = uc.upperCase(email);
        this.EmailConfirmed = true;
        this.PasswordHash = password;
        this.IsActive = true;
    }
    return UserModel;
}());
exports.UserModel = UserModel;
