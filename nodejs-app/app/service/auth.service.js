"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
require("reflect-metadata");
var user_repo_1 = require("../repository/user.repo");
var role_repo_1 = require("../repository/role.repo");
var userrole_repo_1 = require("../repository/userrole.repo");
var message_helper_1 = require("../helper/message.helper");
var auth_config_1 = require("../config/auth.config");
var tsyringe_1 = require("tsyringe");
var guid_typescript_1 = require("guid-typescript");
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var result_model_1 = __importDefault(require("../core/result.model"));
var role_enum_1 = require("../core/role.enum");
var AuthService = /** @class */ (function () {
    function AuthService(_userRepo, _roleRepo, _userRoleRepo) {
        this._userRepo = _userRepo;
        this._roleRepo = _roleRepo;
        this._userRoleRepo = _userRoleRepo;
    }
    AuthService.prototype.Login = function (login) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isPasswordValid, authConfigSecret, authConfigTokenExpirationInSeconds, authEmail, authPassword, authToken, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(login === null || typeof login === undefined)) return [3 /*break*/, 1];
                        return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.NullError)];
                    case 1: return [4 /*yield*/, this._userRepo.GetUserByEmail(login.Email)];
                    case 2:
                        user = _a.sent();
                        if (user === null || typeof user === undefined) {
                            return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.NullError)];
                        }
                        else {
                            isPasswordValid = bcrypt_1.default.compareSync(login.Password, user.PasswordHash);
                            if (isPasswordValid) {
                                authConfigSecret = auth_config_1.AuthConfig.Secret;
                                authConfigTokenExpirationInSeconds = auth_config_1.AuthConfig.TokenExpirationInSeconds;
                                authEmail = login.Email;
                                authPassword = login.Password;
                                authToken = jsonwebtoken_1.default.sign(login, authConfigSecret, { expiresIn: authConfigTokenExpirationInSeconds });
                                console.log("Login authToken" + authToken);
                                result = { success: true, email: authEmail, password: authPassword, token: authToken };
                                return [2 /*return*/, result];
                            }
                            else {
                                return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.UnAuthorized)];
                            }
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.LoginVerify = function (loginVerify) {
        return __awaiter(this, void 0, void 0, function () {
            var user, authConfigSecret, authEmail, authPassword, authToken, authDecoded, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._userRepo.GetUserByEmail(loginVerify.Email)];
                    case 1:
                        user = _a.sent();
                        if (user === null || typeof user === undefined) {
                            return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.NullError)];
                        }
                        else {
                            authConfigSecret = auth_config_1.AuthConfig.Secret;
                            authEmail = loginVerify.Email;
                            authPassword = loginVerify.Password;
                            authToken = String(loginVerify.Token);
                            authDecoded = jsonwebtoken_1.default.verify(authToken, authConfigSecret);
                            result = { success: true, email: authEmail, password: authPassword, token: authToken, decoded: authDecoded };
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.Logout = function (logout) {
        return __awaiter(this, void 0, void 0, function () {
            var user, authConfigSecret, authConfigTokenExpirationInSeconds, authEmail, authPassword, authToken, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._userRepo.GetUserByEmail(logout.Email)];
                    case 1:
                        user = _a.sent();
                        if (user === null || typeof user === undefined) {
                            return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.NullError)];
                        }
                        else {
                            authConfigSecret = auth_config_1.AuthConfig.Secret;
                            authConfigTokenExpirationInSeconds = auth_config_1.AuthConfig.TokenExpirationInSeconds;
                            authEmail = logout.Email;
                            authPassword = logout.Password;
                            authToken = logout.Token;
                            result = result_model_1.default.Ok(message_helper_1.MessageHelper.Logout);
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.Register = function (register) {
        return __awaiter(this, void 0, void 0, function () {
            var user, authConfigHashSalt, passwordHash, registerUser, createUser, roleName, registerRole, createRole, registerUserRole, createUserRole, authConfigSecret, authConfigTokenExpirationInSeconds, authEmail, authPassword, authToken, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(register === null || typeof register === undefined)) return [3 /*break*/, 1];
                        return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.NullError)];
                    case 1: return [4 /*yield*/, this._userRepo.GetUserByEmail(register.Email)];
                    case 2:
                        user = _a.sent();
                        if (!(user === null || typeof user === undefined)) return [3 /*break*/, 10];
                        authConfigHashSalt = auth_config_1.AuthConfig.HashSalt;
                        passwordHash = bcrypt_1.default.hashSync(register.Password, authConfigHashSalt);
                        if (!(passwordHash === null || typeof passwordHash === undefined)) return [3 /*break*/, 3];
                        return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.NullError)];
                    case 3:
                        registerUser = {
                            Id: String(guid_typescript_1.Guid.create()),
                            UserName: register.Email,
                            Email: register.Email,
                            PasswordHash: passwordHash
                        };
                        return [4 /*yield*/, this._userRepo.CreateUser(registerUser)];
                    case 4:
                        createUser = _a.sent();
                        if (!(createUser === null || typeof createUser === undefined)) return [3 /*break*/, 5];
                        return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.UnhandledError)];
                    case 5:
                        roleName = (register.RoleName === null || typeof register.RoleName === undefined) ? String(role_enum_1.RoleEnumLabel.get(role_enum_1.RoleEnum.Admin)) : String(register.RoleName);
                        registerRole = {
                            Id: String(guid_typescript_1.Guid.create()),
                            RoleName: roleName
                        };
                        return [4 /*yield*/, this._roleRepo.CreateRole(registerRole)];
                    case 6:
                        createRole = _a.sent();
                        if (!(createRole === null || typeof createRole === undefined)) return [3 /*break*/, 7];
                        return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.UnhandledError)];
                    case 7:
                        registerUserRole = {
                            Id: String(guid_typescript_1.Guid.create()),
                            UserId: createUser.Id,
                            RoleId: createRole.RoleName
                        };
                        return [4 /*yield*/, this._userRoleRepo.CreateUserRole(registerUserRole)];
                    case 8:
                        createUserRole = _a.sent();
                        if (createUserRole === null || typeof createUserRole === undefined) {
                            return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.UnhandledError)];
                        }
                        else {
                            authConfigSecret = auth_config_1.AuthConfig.Secret;
                            authConfigTokenExpirationInSeconds = auth_config_1.AuthConfig.TokenExpirationInSeconds;
                            authEmail = register.Email;
                            authPassword = register.Password;
                            authToken = jsonwebtoken_1.default.sign(register, authConfigSecret, { expiresIn: authConfigTokenExpirationInSeconds });
                            console.log("Register User authToken" + authToken);
                            result = { success: true, email: authEmail, password: authPassword, token: authToken };
                            return [2 /*return*/, result];
                        }
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10: return [2 /*return*/, result_model_1.default.Fail(message_helper_1.MessageHelper.IsEmailExists)];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    AuthService = __decorate([
        (0, tsyringe_1.autoInjectable)(),
        __metadata("design:paramtypes", [user_repo_1.UserRepo, role_repo_1.RoleRepo, userrole_repo_1.UserRoleRepo])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
