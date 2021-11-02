"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = void 0;
var uc = require('upper-case');
var RoleModel = /** @class */ (function () {
    function RoleModel(id, roleName) {
        this.Id = id;
        this.RoleName = roleName;
        this.NormalizedRoleName = uc.upperCase(roleName);
        this.IsActive = true;
    }
    return RoleModel;
}());
exports.RoleModel = RoleModel;
