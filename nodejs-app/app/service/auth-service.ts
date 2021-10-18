import "reflect-metadata";
import { RoleModel } from "../../app/model/role-model";
import { UserModel } from "../../app/model/user-model";
import { UserRoleModel } from "../../app/model/user-role-model";
import { UserRepo } from "../repository/user-repo";
import { RoleRepo } from "../repository/role-repo";
import { UserRoleRepo } from "../repository/user-role-repo";
import { LoginModel } from "../model/login-model";
import { LoginVerifyModel } from "../model/loginverify-model";
import { LogoutModel } from "../model/logout-model";
import { RegisterModel } from "../model/register-model";
import { MessageHelper } from "../helper/message-helper";
import { AuthConfig } from "../config/auth-config";
import { autoInjectable } from "tsyringe";
import { Guid } from "guid-typescript";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import ResultModel from "../core/result-model";
import { RoleEnum } from "../core/role-enum";
import { RoleEnumLabel } from "../core/role-enum";


@autoInjectable()
export class AuthService {

    constructor(private _userRepo: UserRepo, private _roleRepo: RoleRepo, private _userRoleRepo: UserRoleRepo) {
    }

    async Login(login: LoginModel) {
        
        if (login === null || typeof login === undefined) {
            return ResultModel.Fail(MessageHelper.NullError);
        }
        else {
            const user = await this._userRepo.GetUserByEmail(login.Email);
            if (user === null || typeof user === undefined) {
                return ResultModel.Fail(MessageHelper.NullError);
            }
            else {
                const isPasswordValid = bcrypt.compareSync(login.Password, user.PasswordHash);
                if (isPasswordValid) {

                    const authConfigSecret = AuthConfig.Secret;
                    const authConfigTokenExpirationInSeconds = AuthConfig.TokenExpirationInSeconds;
                    const authEmail = login.Email;
                    const authPassword = login.Password;
                    const authToken = jwt.sign(login, authConfigSecret, { expiresIn: authConfigTokenExpirationInSeconds });

                    console.log("Login authToken" + authToken);
                    const result = {success: true, email: authEmail, password: authPassword, token: authToken};
                    return result;
                }
                else {
                    return ResultModel.Fail(MessageHelper.UnAuthorized);
                }
            }
        }
    }

    async LoginVerify(loginVerify: LoginVerifyModel) {

        const user = await this._userRepo.GetUserByEmail(loginVerify.Email);
        if (user === null || typeof user === undefined) {
            return ResultModel.Fail(MessageHelper.NullError);
        }
        else {

            const authConfigSecret = AuthConfig.Secret;
            const authEmail = loginVerify.Email;
            const authPassword = loginVerify.Password;
            const authToken = String(loginVerify.Token);
            const authDecoded = jwt.verify(authToken, authConfigSecret);
            const result = { success: true, email: authEmail, password: authPassword, token: authToken, decoded: authDecoded };
            return result;

        }

    }

    async Logout(logout: LogoutModel) {

        const user = await this._userRepo.GetUserByEmail(logout.Email);
        if (user === null || typeof user === undefined) {
            return ResultModel.Fail(MessageHelper.NullError);
        }
        else {

            const authConfigSecret = AuthConfig.Secret;
            const authConfigTokenExpirationInSeconds = AuthConfig.TokenExpirationInSeconds;
            const authEmail = logout.Email;
            const authPassword = logout.Password;
            const authToken = logout.Token;
            const result = ResultModel.Ok(MessageHelper.Logout);
            return result;

        }

    }

    async Register(register: RegisterModel) {

        if (register === null || typeof register === undefined) {
            return ResultModel.Fail(MessageHelper.NullError);
        }
        else {
            const user = await this._userRepo.GetUserByEmail(register.Email);
            if (user === null || typeof user === undefined) {
                const authConfigHashSalt = AuthConfig.HashSalt;
                const passwordHash = bcrypt.hashSync(register.Password, authConfigHashSalt);
                if (passwordHash === null || typeof passwordHash === undefined) {
                    return ResultModel.Fail(MessageHelper.NullError);
                }
                else {
                    const registerUser: UserModel = {
                        Id: String(Guid.create()),
                        UserName: register.Email,
                        Email: register.Email,
                        PasswordHash: passwordHash
                    }

                    const createUser: UserModel = await this._userRepo.CreateUser(registerUser);
                    if (createUser === null || typeof createUser === undefined) {
                        return ResultModel.Fail(MessageHelper.UnhandledError);
                    }
                    else {

                        const roleName = (register.RoleName === null || typeof register.RoleName === undefined) ? String(RoleEnumLabel.get(RoleEnum.Admin)) : String(register.RoleName);
                        const registerRole: RoleModel = {
                            Id: String(Guid.create()),
                            RoleName: roleName
                        }

                        const createRole: RoleModel = await this._roleRepo.CreateRole(registerRole);
                        if (createRole === null || typeof createRole === undefined) {
                            return ResultModel.Fail(MessageHelper.UnhandledError);
                        }
                        else {

                            const registerUserRole: UserRoleModel = {
                                Id: String(Guid.create()),
                                UserId: createUser.Id,
                                RoleId: createRole.RoleName
                            }

                            const createUserRole: UserRoleModel = await this._userRoleRepo.CreateUserRole(registerUserRole);
                            if (createUserRole === null || typeof createUserRole === undefined) {
                                return ResultModel.Fail(MessageHelper.UnhandledError);
                            }
                            else {

                                const authConfigSecret = AuthConfig.Secret;
                                const authConfigTokenExpirationInSeconds = AuthConfig.TokenExpirationInSeconds;
                                const authEmail = register.Email;
                                const authPassword = register.Password;
                                const authToken = jwt.sign(register, authConfigSecret, { expiresIn: authConfigTokenExpirationInSeconds });

                                console.log("Register User authToken" + authToken);
                                const result = { success: true, email: authEmail, password: authPassword, token: authToken };
                                return result;

                            }

                        }
                    }
                }
            }
            else {
                return ResultModel.Fail(MessageHelper.IsEmailExists);
            }
        }
    }

}
