import { NextFunction, Request, Response } from "express"
import { StudentService } from "../../app/service/student-service";
import "reflect-metadata";
import { container } from "tsyringe";
import { StudentModel } from "../../app/model/student-model";

class StudentController {
    constructor() { }

    async GetAll(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(StudentService);
            const result = await service.GetStudents();
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async GetById(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(StudentService);
            const id = Number(req.params.id);
            const result = await service.GetStudentById(id);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Add(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(StudentService);
            const student: StudentModel = req.body;
            const result = await service.CreateStudent(student);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Edit(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(StudentService);
            const student: StudentModel = req.body;
            const result = await service.UpdateStudentById(student);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }

    async Delete(req: Request, res: Response, next: NextFunction) {
        try {
            const service = container.resolve(StudentService);
            const id = Number(req.params.id);
            const result = await service.DeleteStudentById(id);
            res.json(result);

        } catch (e) {
            next(e)
        }
    }


}
export default new StudentController()