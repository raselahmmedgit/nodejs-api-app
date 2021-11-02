export class StudentModel {
    StudentId: number;
    StudentName: string;
    EmailAddress: string;
    DateOfBirth: any;

    constructor(studentId: number, studentName: string, emailAddress: string, dateOfBirth: any) {
        this.StudentId = studentId;
        this.StudentName = studentName;
        this.EmailAddress = emailAddress;
        this.DateOfBirth = dateOfBirth;
    }
}