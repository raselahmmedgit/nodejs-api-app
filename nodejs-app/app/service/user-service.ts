import "reflect-metadata";
import {UserRepo} from "../repository/user-repo";
import {UserModel} from "../model/user-model";
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class UserService {

    constructor(private _userRepo: UserRepo) {
    }

    async CreateUser(user: UserModel) {
        const result = await this._userRepo.CreateUser(user);
        return result;
    }

    async GetUsers() {
        const result = await this._userRepo.GetUsers();
        return result;
    }

    async GetUserById(id: string) {
        const result = await this._userRepo.GetUserById(id);
        return result;
    }

    async GetUserByEmail(email: string) {
        const result = await this._userRepo.GetUserByEmail(email);
        return result;
    }

    async UpdateUserById(user: UserModel) {
        const result = await this._userRepo.UpdateUserById(user);
        return result;
    }

    async DeleteUserById(id: string) {
        const result = await this._userRepo.DeleteUserById(id);
        return result;
    }
}
