import {autoInjectable} from "tsyringe";
import {DataTypes, ModelCtor,} from "sequelize";
import {DbContext} from "./db_context";
import {UserRoleModel} from "../model/user-role-model";

@autoInjectable()
export class UserRoleRepo {
    userRoleContext: ModelCtor<any>;

    constructor(private dbContext: DbContext) {
        this.userRoleContext = this.dbContext.Context.define('userroles', {
            // Model attributes are defined here
            Id: {
                type: DataTypes.STRING,
                primaryKey: true,
                autoIncrement: true
            },
            UserId: {
                type: DataTypes.STRING,
                allowNull: false
            },
            RoleId: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            // Other model options go here
            tableName: 'userroles',
            freezeTableName: true,
            timestamps: false,
            paranoid: false
        });
    }

    async CreateUserRole(userRole: UserRoleModel) {
        let result;
        try {
            result = await this.userRoleContext.create({
                Id: userRole.Id,
                UserId: userRole.UserId,
                RoleId: userRole.RoleId,
            });
        } catch (error) {
            console.error('Unable to Create database: ', error);
        }
        return result;
    }

    async GetUserRoleById(id: string) {
        let result;
        try {
            result = await this.userRoleContext.findOne({
                where: {
                    userId: id
                }
            });
        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async GetUserRoles() {
        let result;
        try {
            result = await this.userRoleContext.findAll({
                where: {
                },
                limit: 100
            });

        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async UpdateUserRoleById(userRole: UserRoleModel) {
        let result;
        try {
            result = await this.userRoleContext.update({RoleId: userRole.RoleId}, {
                where: {
                    userId: userRole.UserId
                },
                limit: 1,
                returning: true
            });
        } catch (error) {
            console.error('Unable to update database:', error);
        }
        return result == undefined ? "Unable to update database" : result[1][0];
    }

    async DeleteUserRoleById(id: string) {
        let result;
        try {
            result = await this.userRoleContext.update({isActive: true}, {
                where: {
                    userUserId: id
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

