var uc = require('upper-case');

export class RoleModel {
    Id: string;
    RoleName: string;
    NormalizedRoleName?: string;
    IsActive?: boolean;

    constructor(id: string, roleName: string) {
        this.Id = id;
        this.RoleName = roleName;
        this.NormalizedRoleName = uc.upperCase(roleName);
        this.IsActive = true;
    }
}