const students = [{ name: "Ali", grade: 75 }, { name: "Sara", grade: 92 }, { name: "Mona", grade: 88 }] 
const Users = [{ name: "Malak", role: "Student" }, { name: "Omar", role: "Mentor" }] 
const Products = [{ id: 1, name: "Mouse" }, { id: 2, name: "Keyboard" }, { id: 3, name: "Screen" }] 
const numbers = [1, 2, 3, 4, 5, 6]
const employees = [{ name: "Nour", department: "HR" }, { name: "Youssef", department: "IT" }] 
const words = ["js", "ts", "js", "react", "js", "ts"] 
const person = { name: "Laila", age: 21, city: "Cairo" } 
const student = { name: "Hana", grade: 84, level: 2 }

//problem 1
const highGradedStudents = students.filter(student => student.grade > 80);

//problem 2
const userRoles = Users.map(user => `${user.name} - ${user.role}`)

//problem 3
const product3 = Products.find(prod => prod.id === 3);

//problem 4
const {name: personName, age: personAge} = person;
console.log(personName, personAge)

//problem 5
const MergedArr = [...numbers, ...words];

//problem 6
const updatedStudentObj = {...student, grade: 99}

//problem 7
const doubledNumbers = numbers.map(n => n * 2);

//problem 8
const even = numbers.filter(n => n % 2 === 0);

//problem 9
const IT_Employee = employees.find(emp => emp.department === "IT");

//problem 10
const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});