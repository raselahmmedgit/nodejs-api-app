import { NextFunction, Request, Response } from "express"
import { RoleService } from "../../app/service/role-service";
import "reflect-metadata";
import { container } from "tsyringe";
import { RoleModel } from "../../app/model/role-model";

class RoleController {
    constructor() { }

    async GetAll(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(RoleService);
            const result = await service.GetRoles();
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async GetById(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(RoleService);
            const id = String(req.params.id);
            const result = await service.GetRoleById(id);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Add(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(RoleService);
            const role: RoleModel = req.body;
            const result = await service.CreateRole(role);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Edit(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(RoleService);
            const role: RoleModel = req.body;
            const result = await service.UpdateRoleById(role);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Delete(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(RoleService);
            const id = String(req.params.id);
            const result = await service.DeleteRoleById(id);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }


}
export default new RoleController()