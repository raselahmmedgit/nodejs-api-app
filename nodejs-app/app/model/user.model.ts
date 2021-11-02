var uc = require('upper-case');

export class UserModel {
    Id: string;
    UserName: string;
    NormalizedUserName?: string;
    Email: string;
    NormalizedEmail?: string;
    EmailConfirmed?: boolean;
    PasswordHash: string;
    IsActive?: boolean;

    constructor(Id: string, userName: string, email: string, password: string) {
        this.Id = Id;
        this.UserName = userName;
        this.NormalizedUserName = uc.upperCase(userName);
        this.Email = email;
        this.NormalizedEmail = uc.upperCase(email);
        this.EmailConfirmed = true;
        this.PasswordHash = password;
        this.IsActive = true;
    }
}