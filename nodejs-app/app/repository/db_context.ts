import {Sequelize,} from "sequelize";
import {singleton} from "tsyringe";
import {AppSettingsService} from "../service/app-settings-service";
import {AppSettings} from "../model/app-settings";

@singleton()
export class DbContext {
    // sequalize = new Sequelize("mysql://rasel:123456@localhost:3306/nodejs_db");

    Context: Sequelize;

    constructor(private appSettingsService: AppSettingsService) {
        const result = appSettingsService.GetSettings();
        this.Context = new Sequelize({
            dialect: result.Dialect,
            host: result.DatabaseHost,
            port: result.DatabasePort,
            username: result.DatabaseUsername,
            password: result.DatabasePassword,
            database: result.DatabaseName
        });

        //this.Context = new Sequelize("mysql://rasel:123456@localhost:3306/nodejs_db");
    }
}