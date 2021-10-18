import {autoInjectable} from "tsyringe";
import {DataTypes, ModelCtor,} from "sequelize";
import {DbContext} from "./db_context";
import {RoleModel} from "../model/role-model";

@autoInjectable()
export class RoleRepo {
    roleContext: ModelCtor<any>;

    constructor(private dbContext: DbContext) {
        this.roleContext = this.dbContext.Context.define('roles', {
            // Model attributes are defined here
            Id: {
                type: DataTypes.STRING,
                primaryKey: true,
                autoIncrement: true
            },
            RoleName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            NormalizedRoleName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 1
            }
        }, {
            // Other model options go here
            tableName: 'roles',
            freezeTableName: true,
            timestamps: false,
            paranoid: false
        });
    }

    async CreateRole(role: RoleModel) {
        let result;
        try {
            result = await this.roleContext.create({
                Id: role.Id,
                RoleName: role.RoleName,
                NormalizedRoleName: role.RoleName,
                IsActive: true
            });
        } catch (error) {
            console.error('Unable to Create database: ', error);
        }
        return result;
    }

    async GetRoleById(id: string) {
        let result;
        try {
            result = await this.roleContext.findOne({
                where: {
                    id: id,
                    isActive: true
                }
            });
        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async GetRoles() {
        let result;
        try {
            result = await this.roleContext.findAll({
                where: {
                    isActive: true
                },
                limit: 100
            });

        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async UpdateRoleById(role: RoleModel) {
        let result;
        try {
            result = await this.roleContext.update({RoleName: role.RoleName}, {
                where: {
                    id: role.Id
                },
                limit: 1,
                returning: true
            });
        } catch (error) {
            console.error('Unable to update database:', error);
        }
        return result == undefined ? "Unable to update database" : result[1][0];
    }

    async DeleteRoleById(id: string) {
        let result;
        try {
            result = await this.roleContext.update({isActive: true}, {
                where: {
                    id: id
                },
                limit: 1,
                returning: true
            });

        } catch (error) {
            console.error('Unable to delete database:', error);
        }
        return result == undefined ? "Unable to update database" : result[1][0];
    }
}

