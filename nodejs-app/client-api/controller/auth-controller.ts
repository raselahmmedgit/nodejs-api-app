import { NextFunction, Request, Response } from "express"
import { AuthService } from "../../app/service/auth-service";
import "reflect-metadata";
import { container } from "tsyringe";
import { LoginModel } from "../../app/model/login-model";
import { LoginVerifyModel } from "../../app/model/loginverify-model";
import { LogoutModel } from "../../app/model/logout-model";
import { RegisterModel } from "../../app/model/register-model";
import ResultModel from "../../app/core/result-model";
import { MessageHelper } from "../../app/helper/message-helper";


class AuthController {
    constructor() { }

    async Login(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email
            const password = req.body.password
            const rolename = req.body.rolename

            if (req.body.email === null || req.body.email === '' || typeof req.body.email === undefined) {
                const result = ResultModel.Fail('Email is required.');
                return res.json(result);
            }
            else if (req.body.password === null || req.body.password === '' || typeof req.body.password === undefined) {
                const result = ResultModel.Fail('Password is required.');
                return res.json(result);
            }
            else if (req.body.rolename === null || req.body.rolename === '' || typeof req.body.rolename === undefined) {
                const result = ResultModel.Fail('Role name is required.');
                return res.json(result);
            }

            const login: LoginModel = {
                Email: email,
                Password: password,
                RoleName: rolename
            }
            if (login === null || typeof login === undefined) {
                const result = ResultModel.Fail(MessageHelper.NullError);
                return res.json(result);
            }
            else {
                const service = container.resolve(AuthService);
                const result = await service.Login(login);
                return res.json(result);
            }

        } catch (e) {
            next(e)
        }
    }

    async LoginVerify(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email
            const password = req.body.password
            const token = req.body.token

            if (req.body.email === null || req.body.email === '' || typeof req.body.email === undefined) {
                const result = ResultModel.Fail('Email is required.');
                return res.json(result);
            }
            else if (req.body.password === null || req.body.password === '' || typeof req.body.password === undefined) {
                const result = ResultModel.Fail('Password is required.');
                return res.json(result);
            }
            else if (req.body.token === null || req.body.token === '' || typeof req.body.token === undefined) {
                const result = ResultModel.Fail('Token is required.');
                return res.json(result);
            }

            const loginVerify: LoginVerifyModel = {
                Email: email,
                Password: password,
                Token: token
            }
            if (loginVerify === null || typeof loginVerify === undefined) {
                const result = ResultModel.Fail(MessageHelper.NullError);
                return res.json(result);
            }
            else {
                const service = container.resolve(AuthService);
                const result = await service.LoginVerify(loginVerify);
                return res.json(result);
            }

        } catch (e) {
            next(e)
        }
    }

    async Logout(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email
            const password = req.body.password
            const token = req.body.token

            if (req.body.email === null || req.body.email === '' || typeof req.body.email === undefined) {
                const result = ResultModel.Fail('Email is required.');
                return res.json(result);
            }
            else if (req.body.password === null || req.body.password === '' || typeof req.body.password === undefined) {
                const result = ResultModel.Fail('Password is required.');
                return res.json(result);
            }
            else if (req.body.token === null || req.body.token === '' || typeof req.body.token === undefined) {
                const result = ResultModel.Fail('Token is required.');
                return res.json(result);
            }

            const logout: LogoutModel = {
                Email: email,
                Password: password,
                Token: token
            }
            if (logout === null || typeof logout === undefined) {
                const result = ResultModel.Fail(MessageHelper.NullError);
                return res.json(result);
            }
            else {
                const service = container.resolve(AuthService);
                const result = await service.Logout(logout);
                return res.json(result);
            }

        } catch (e) {
            next(e)
        }
    }

    async Register(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email
            const password = req.body.password
            const confirmPassword = req.body.confirmPassword
            const rolename = req.body.rolename

            if (req.body.email == null || req.body.email === '' || typeof req.body.email == undefined) {
                const result = ResultModel.Fail('Email is required.');
                return res.json(result);
            }
            else if (req.body.password == null || req.body.password === '' || typeof req.body.password == undefined) {
                const result = ResultModel.Fail('Password is required.');
                return res.json(result);
            }
            else if (req.body.confirmpassword == null || req.body.confirmpassword === '' || typeof req.body.confirmpassword == undefined) {
                const result = ResultModel.Fail('Confirm Password is required.');
                return res.json(result);
            }
            else if (req.body.rolename == null || req.body.rolename === '' || typeof req.body.rolename == undefined) {
                const result = ResultModel.Fail('Role name is required.');
                return res.json(result);
            }

            const register: RegisterModel = {
                Email: email,
                Password: password,
                ConfirmPassword: confirmPassword,
                RoleName: rolename
            }
            if (register === null || typeof register === undefined) {
                const result = ResultModel.Fail(MessageHelper.NullError);
                return res.json(result);
            }
            else {
                const service = container.resolve(AuthService);
                const result = await service.Register(register);
                return res.json(result);
            }

        } catch (e) {
            next(e)
        }
    }
}
export default new AuthController()