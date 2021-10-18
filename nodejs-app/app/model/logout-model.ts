export class LogoutModel {
    Email: string;
    Password: string;
    Token?: string;

    constructor(email: string, password: string, token?: string) {
        this.Email = email;
        this.Password = password;
        this.Token = token;
    }
}