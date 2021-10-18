import {AppSettings} from "../model/app-settings";
import {singleton} from "tsyringe";
import {AppConfig} from "../config/app-config";
import {DbConfig} from "../config/db-config";
import {Observable, of} from "rxjs";

@singleton()
export class AppSettingsService {
    GetSettings(): AppSettings{
        let settings:AppSettings = {
            AppHost: AppConfig.AppHost,
            AppPort: AppConfig.AppPort,
            DatabaseHost: DbConfig.DatabaseHost,
            DatabasePort: DbConfig.DatabasePort,
            DatabaseUsername: DbConfig.DatabaseUsername,
            DatabasePassword: DbConfig.DatabasePassword,
            DatabaseName: DbConfig.DatabaseName,
            Dialect: DbConfig.Dialect,
        };
        return settings;
    }
}
