"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
var StudentModel = /** @class */ (function () {
    function StudentModel(studentId, studentName, emailAddress, dateOfBirth) {
        this.StudentId = studentId;
        this.StudentName = studentName;
        this.EmailAddress = emailAddress;
        this.DateOfBirth = dateOfBirth;
    }
    return StudentModel;
}());
exports.StudentModel = StudentModel;
