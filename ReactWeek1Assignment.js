class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        const alreadyRegistered = this.students.filter(stu => studentToRegister.email === stu.email);

        if (alreadyRegistered.length === 0) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.name} to the bootcamp ${this.name}.`);
            return this.students;
        } else {
            console.log(`Sorry, ${studentToRegister.email} is already registered for ${this.name}.`);
        }
    }
}

