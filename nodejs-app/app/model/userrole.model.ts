export class UserRoleModel {
    Id: string;
    UserId: string;
    RoleId: string;

    constructor(id: string, userId: string, roleId: string) {
        this.Id = id;
        this.UserId = userId;
        this.RoleId = roleId;
    }
}