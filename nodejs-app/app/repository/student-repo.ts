import {autoInjectable} from "tsyringe";
import {DataTypes, ModelCtor,} from "sequelize";
import {DbContext} from "./db_context";
import {StudentModel} from "../model/student-model";

@autoInjectable()
export class StudentRepo {
    studentContext: ModelCtor<any>;

    constructor(private dbContext: DbContext) {
        this.studentContext = this.dbContext.Context.define('students', {
            // Model attributes are defined here
            StudentId: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                autoIncrement: true
            },
            StudentName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            EmailAddress: {
                type: DataTypes.STRING,
                allowNull: false
            },
            DateOfBirth: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            // Other model options go here
            tableName: 'students',
            freezeTableName: true,
            timestamps: false,
            paranoid: false
        });
    }

    async CreateStudent(student: StudentModel) {
        let result;
        try {
            result = await this.studentContext.create({
                StudentName: student.StudentName,
                EmailAddress: student.EmailAddress,
                DateOfBirth: student.DateOfBirth
            });
        } catch (error) {
            console.error('Unable to Create database: ', error);
        }
        return result;
    }

    async GetStudentById(studentId: number) {
        let result;
        try {
            result = await this.studentContext.findOne({
                where: {
                    studentId: studentId
                }
            });
        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async GetStudents() {
        let result;
        try {
            result = await this.studentContext.findAll({
                where: {
                },
                limit: 100
            });

        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async UpdateStudentById(student: StudentModel) {
        let result;
        try {
            result = await this.studentContext.update({StudentName: student.StudentName}, {
                where: {
                    Id: student.StudentId
                },
                limit: 1,
                returning: true
            });
        } catch (error) {
            console.error('Unable to update database:', error);
        }
        return result == undefined ? "Unable to update database" : result[1][0];
    }

    async DeleteStudentById(studentId: number) {
        let result;
        try {
            result = await this.studentContext.update({IsActive: true}, {
                where: {
                    StudentId: studentId
                },
                limit: 1,
                returning: true
            });

        } catch (error) {
            console.error('Unable to delete database:', error);
        }
        return result == undefined ? "Unable to update database" : result[1][0];
    }
}

