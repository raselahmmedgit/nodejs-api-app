"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
var route_config_1 = require("../route/route.config");
var auth_controller_1 = __importDefault(require("../controller/auth.controller"));
var role_controller_1 = __importDefault(require("../controller/role.controller"));
var user_controller_1 = __importDefault(require("../controller/user.controller"));
var student_controller_1 = __importDefault(require("../controller/student.controller"));
var auth_jwt_1 = __importDefault(require("../../app/auth/auth.jwt"));
var AuthRoutes = /** @class */ (function (_super) {
    __extends(AuthRoutes, _super);
    function AuthRoutes(app) {
        return _super.call(this, app, "AuthRoutes") || this;
    }
    AuthRoutes.prototype.configureRoutes = function () {
        this.app.route("/login").post(auth_controller_1.default.Login);
        this.app.route("/loginverify").post(auth_controller_1.default.LoginVerify);
        this.app.route("/logout").post(auth_controller_1.default.Logout);
        this.app.route("/register").post(auth_controller_1.default.Register);
        //Declare Role Route
        this.app.route("/role/get").get([auth_jwt_1.default.AuthenticateJwt, role_controller_1.default.GetAll]);
        this.app.route("/role/get/:id").get([auth_jwt_1.default.AuthenticateJwt, role_controller_1.default.GetById]);
        this.app.route("/role/add").get([auth_jwt_1.default.AuthenticateJwt, role_controller_1.default.Add]);
        this.app.route("/role/edit").get([auth_jwt_1.default.AuthenticateJwt, role_controller_1.default.Edit]);
        this.app.route("/role/delete/:id").get([auth_jwt_1.default.AuthenticateJwt, role_controller_1.default.Delete]);
        //Declare Role Route
        //Declare User Route
        this.app.route("/user/get").get([auth_jwt_1.default.AuthenticateJwt, user_controller_1.default.GetAll]);
        this.app.route("/user/get/:id").get([auth_jwt_1.default.AuthenticateJwt, user_controller_1.default.GetById]);
        this.app.route("/user/add").get([auth_jwt_1.default.AuthenticateJwt, user_controller_1.default.Add]);
        this.app.route("/user/edit").get([auth_jwt_1.default.AuthenticateJwt, user_controller_1.default.Edit]);
        this.app.route("/user/delete/:id").get([auth_jwt_1.default.AuthenticateJwt, user_controller_1.default.Delete]);
        //Declare User Route
        //Declare Student Route
        this.app.route("/student/get").get([auth_jwt_1.default.AuthenticateJwt, student_controller_1.default.GetAll]);
        this.app.route("/student/get/:id").get([auth_jwt_1.default.AuthenticateJwt, student_controller_1.default.GetById]);
        this.app.route("/student/add").get([auth_jwt_1.default.AuthenticateJwt, student_controller_1.default.Add]);
        this.app.route("/student/edit").get([auth_jwt_1.default.AuthenticateJwt, student_controller_1.default.Edit]);
        this.app.route("/student/delete/:id").get([auth_jwt_1.default.AuthenticateJwt, student_controller_1.default.Delete]);
        //Declare Student Route
        this.app.route("/students").get([auth_jwt_1.default.AuthenticateJwt, auth_controller_1.default.Login]);
        return this.app;
    };
    return AuthRoutes;
}(route_config_1.RouteConfig));
exports.AuthRoutes = AuthRoutes;
