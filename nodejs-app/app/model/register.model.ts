export class RegisterModel {
    Email: string;
    Password: string;
    ConfirmPassword: string;
    RoleName: string;

    constructor(email: string, password: string, confirmPassword: string, roleName: string) {
        this.Email = email;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
        this.RoleName = roleName;
    }
}