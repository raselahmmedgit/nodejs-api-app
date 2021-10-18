import "reflect-metadata";
import {RoleRepo} from "../repository/role-repo";
import {RoleModel} from "../model/role-model";
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class RoleService {

    constructor(private _roleRepo: RoleRepo) {
    }

    async CreateRole(role: RoleModel) {
        const result = await this._roleRepo.CreateRole(role);
        return result;
    }

    async GetRoles() {
        const result = await this._roleRepo.GetRoles();
        return result;
    }

    async GetRoleById(id: string) {
        const result = await this._roleRepo.GetRoleById(id);
        return result;
    }

    async UpdateRoleById(role: RoleModel) {
        const result = await this._roleRepo.UpdateRoleById(role);
        return result;
    }

    async DeleteRoleById(id: string) {
        const result = await this._roleRepo.DeleteRoleById(id);
        return result;
    }
}
