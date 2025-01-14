"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.slice(0, 1).toUpperCase(), ". ").concat(lastName.charAt(0).toUpperCase() + lastName.slice(1));
};
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
console.log(teacher3);
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
