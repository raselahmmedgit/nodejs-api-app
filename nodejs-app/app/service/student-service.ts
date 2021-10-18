import "reflect-metadata";
import {StudentRepo} from "../repository/student-repo";
import {StudentModel} from "../model/student-model";
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class StudentService {

    constructor(private _studentRepo: StudentRepo) {
    }

    async CreateStudent(student: StudentModel) {
        const result = await this._studentRepo.CreateStudent(student);
        return result;
    }

    async GetStudents() {
        const result = await this._studentRepo.GetStudents();
        return result;
    }

    async GetStudentById(id: number) {
        const result = await this._studentRepo.GetStudentById(id);
        return result;
    }

    async UpdateStudentById(student: StudentModel) {
        const result = await this._studentRepo.UpdateStudentById(student);
        return result;
    }

    async DeleteStudentById(id: number) {
        const result = await this._studentRepo.DeleteStudentById(id);
        return result;
    }
}
