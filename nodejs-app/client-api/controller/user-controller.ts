import { NextFunction, Request, Response } from "express"
import { UserService } from "../../app/service/user-service";
import "reflect-metadata";
import { container } from "tsyringe";
import { UserModel } from "../../app/model/user-model";

class UserController {
    constructor() { }

    async GetAll(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(UserService);
            const result = await service.GetUsers();
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async GetById(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(UserService);
            const id = String(req.params.id);
            const result = await service.GetUserById(id);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Add(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(UserService);
            const user: UserModel = req.body;
            const result = await service.CreateUser(user);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Edit(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(UserService);
            const user: UserModel = req.body;
            const result = await service.UpdateUserById(user);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Delete(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(UserService);
            const id = String(req.params.id);
            const result = await service.DeleteUserById(id);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

}
export default new UserController()