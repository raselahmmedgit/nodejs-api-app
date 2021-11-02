"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEnumLabel = exports.RoleEnum = void 0;
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["Admin"] = 1] = "Admin";
    RoleEnum[RoleEnum["Member"] = 2] = "Member";
})(RoleEnum = exports.RoleEnum || (exports.RoleEnum = {}));
;
exports.RoleEnumLabel = new Map([
    [RoleEnum.Admin, 'Admin'],
    [RoleEnum.Member, 'Member']
]);
//console.log(RoleEnumLabel.get(RoleEnum.Admin)); //Admin
