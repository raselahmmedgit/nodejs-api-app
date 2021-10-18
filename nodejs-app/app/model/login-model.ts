export class LoginModel {
    Email: string;
    Password: string;
    RoleName?: string;

    constructor(email: string, password: string, roleName?: string) {
        this.Email = email;
        this.Password = password;
        this.RoleName = roleName;
    }
}