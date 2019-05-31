// CODE here for your Lambda Classes


//CLASSES

//Person Class
class Person {
    constructor(personAttributes) {

        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Instructor Class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }
}


//Studen Class
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}.`;
    }
}

//Project Maager Class
class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


//OBJECTS

//Person Objects
const amy = new Person({
    name: 'Amy',
    age: 29,
    location: 'San Francisco'
});

const caleb = new Person({
    name: 'Caleb',
    age: 35,
    location: 'Denver'
});

const carmen = new Person({
    name: 'Carmen',
    age: 27,
    location: 'New York City'
});

//Instructor Objects

const cody = new Instructor({
    name: 'Cody',
    age: 36,
    location: 'Baltimore',
    specialty: 'User Interface',
    favLanguage: 'Java',
    catchPhrase: 'It’s showtime!'
});

const daniel = new Instructor({
    name: 'Daniel',
    age: 30,
    location: 'Seattle',
    specialty: 'Applications',
    favLanguage: 'C#',
    catchPhrase: 'Good morning, Vietnam!',
});

const johnny = new Instructor({
    name: 'Johnny',
    age: 31,
    location: 'El Paso',
    specialty: 'Systems Development',
    favLanguage: 'C++',
    catchPhrase: 'Heeeeere’s Johnny!'
});



// Student Objects

const david = new Student({
    name: 'David',
    age: 22,
    location: 'Los Angeles',
    previousBackground: 'Military',
    className: 'Web7',
    favSubjects: 'English'
});

const eric = new Student({
    name: 'Eric',
    age: 26,
    location: 'Houston',
    previousBackground: 'CEO',
    className: 'WebPT7',
    favSubjects: 'History'
});

const devon = new Student({
    name: 'Devon',
    age: 24,
    location: 'Chicago',
    previousBackground: 'Marine Biologist',
    className: 'IOS6',
    favSubjects: 'Biology'
});

// Project MAnager Objects

const genaro = new ProjectManager({
    name: 'Genaro',
    age: 27,
    location: 'Dallas',
    specialty: 'Mobile Development',
    favLanguage: 'Javascript',
    catchPhrase: 'To infinity…and beyond!',
    gradClassName: 'IOS1',
    favInstructor: 'Johnny'
});

const heather = new ProjectManager({
    name: 'Heather',
    age: 28,
    location: 'Austin',
    specialty: 'Redux',
    favLanguage: 'Ruby',
    catchPhrase: 'Alrighty then!',
    gradClassName: 'Web1',
    favInstructor: 'Cody'
});

const jody = new ProjectManager({
    name: 'Jody',
    age: 25,
    location: 'Las Vegas',
    specialty: 'Video Game Development',
    favLanguage: 'C',
    catchPhrase: 'Well, la-de-da.',
    gradClassName: 'Web2',
    favInstructor: 'Daniel'
});

// Functional Code Tests

// Person Functional Test

console.log(amy.name);
console.log(caleb.age);
console.log(carmen.location);
console.log(amy.speak());

// Instructor Functional Test

console.log(cody.specialty);
console.log(daniel.favLanguage);
console.log(johnny.catchPhrase);
console.log(daniel.demo('Redux'));
console.log(cody.grade(devon, 'CSS Fundamentals'));

// Student Functional Test

console.log(david.previousBackground);
console.log(eric.className);
console.log(devon.favSubjects);
console.log(eric.listsSubjects());
console.log(devon.PRAssignment('Javascript'));
console.log(david.sprintChallenge('HTML Fundamentals'));

//Project Manager Functional Tests

console.log(jody.gradClassName);
console.log(heather.favInstructor);
console.log(genaro.standup('WebPT7'));
console.log(jody.debugsCode(eric, 'Javascript-III'))
