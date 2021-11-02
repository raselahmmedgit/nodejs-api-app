export class AppSettings {
    AppHost: any;
    AppPort: any;
    DatabaseHost: any;
    DatabasePort: any;
    DatabaseUsername: any;
    DatabasePassword: any;
    DatabaseName: any;
    Dialect: any;

    constructor(appHost: any, appPort: any, databaseHost: any, databasePort: any
        , databaseUsername: any, databasePassword: any
        , databaseName: any, dialect: any) {
        this.AppHost = appHost;
        this.AppPort = appPort;
        this.DatabaseHost = databaseHost;
        this.DatabasePort = databasePort;
        this.DatabaseUsername = databaseUsername;
        this.DatabasePassword = databasePassword;
        this.DatabaseName = databaseName;
        this.Dialect = dialect;
    }
}
