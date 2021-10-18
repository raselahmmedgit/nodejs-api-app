import { Application, Request, Response } from "express"
import { RouteConfig } from "../route/route-config";
import AuthController from "../controller/auth-controller";
import RoleController from "../controller/role-controller";
import UserController from "../controller/user-controller";
import StudentController from "../controller/student-controller";
import AuthJwt from "../../app/auth/auth-jwt";

export class AuthRoutes extends RouteConfig {

    constructor(app: Application) {
        super(app, "AuthRoutes")
    }

    configureRoutes() {

        this.app.route("/login").post(AuthController.Login);
        this.app.route("/loginverify").post(AuthController.LoginVerify);
        this.app.route("/logout").post(AuthController.Logout);
        this.app.route("/register").post(AuthController.Register);

        //Declare Role Route
        this.app.route("/role/get").get([AuthJwt.AuthenticateJwt, RoleController.GetAll]);
        this.app.route("/role/get/:id").get([AuthJwt.AuthenticateJwt, RoleController.GetById]);
        this.app.route("/role/add").get([AuthJwt.AuthenticateJwt, RoleController.Add]);
        this.app.route("/role/edit").get([AuthJwt.AuthenticateJwt, RoleController.Edit]);
        this.app.route("/role/delete/:id").get([AuthJwt.AuthenticateJwt, RoleController.Delete]);
        //Declare Role Route

        //Declare User Route
        this.app.route("/user/get").get([AuthJwt.AuthenticateJwt, UserController.GetAll]);
        this.app.route("/user/get/:id").get([AuthJwt.AuthenticateJwt, UserController.GetById]);
        this.app.route("/user/add").get([AuthJwt.AuthenticateJwt, UserController.Add]);
        this.app.route("/user/edit").get([AuthJwt.AuthenticateJwt, UserController.Edit]);
        this.app.route("/user/delete/:id").get([AuthJwt.AuthenticateJwt, UserController.Delete]);
        //Declare User Route

        //Declare Student Route
        this.app.route("/student/get").get([AuthJwt.AuthenticateJwt, StudentController.GetAll]);
        this.app.route("/student/get/:id").get([AuthJwt.AuthenticateJwt, StudentController.GetById]);
        this.app.route("/student/add").get([AuthJwt.AuthenticateJwt, StudentController.Add]);
        this.app.route("/student/edit").get([AuthJwt.AuthenticateJwt, StudentController.Edit]);
        this.app.route("/student/delete/:id").get([AuthJwt.AuthenticateJwt, StudentController.Delete]);
        //Declare Student Route

        this.app.route("/students").get([AuthJwt.AuthenticateJwt, AuthController.Login]);

        return this.app
    }
}