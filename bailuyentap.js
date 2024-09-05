class Student {
    constructor(code, fullName, gender, dob, hometown) {
        this.code = code;
        this.fullName = fullName;
        this.gender = gender;
        this.dob = dob;
        this.hometown = hometown;
    }
}

class StudentManager {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
        this.loadStudents();
    }

    addStudent(student) {
        this.students.push(student);
        this.updateStorage();
    }

    updateStudent(id, updatedStudent) {
        this.students[id] = updatedStudent;
        this.updateStorage();
    }

    deleteStudent(id) {
        this.students.splice(id, 1);
        this.updateStorage();
    }

    loadStudents() {
        const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        studentTable.innerHTML = '';
        this.students.forEach((student, index) => {
            const row = studentTable.insertRow();
            row.insertCell(0).textContent = student.code;
            row.insertCell(1).textContent = student.fullName;
            row.insertCell(2).textContent = student.gender;
            row.insertCell(3).textContent = student.dob;
            row.insertCell(4).textContent = student.hometown;
            const actionsCell = row.insertCell(5);
            actionsCell.innerHTML = `
                <button onclick="editStudent(${index})">Sửa</button>
                <button onclick="deleteStudent(${index})">Xóa</button>
            `;
        });
    }

    updateStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
        this.loadStudents();
    }
}

const studentManager = new StudentManager();

document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const studentCode = document.getElementById('studentCode').value;
    const fullName = document.getElementById('fullName').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const hometown = document.getElementById('hometown').value;

    const student = new Student(studentCode, fullName, gender, dob, hometown);

    if (studentId === '') {
        studentManager.addStudent(student);
    } else {
        studentManager.updateStudent(studentId, student);
    }

    document.getElementById('studentForm').reset();
    document.getElementById('studentId').value = '';
});

function editStudent(id) {
    const student = studentManager.students[id];
    document.getElementById('studentId').value = id;
    document.getElementById('studentCode').value = student.code;
    document.getElementById('fullName').value = student.fullName;
    document.getElementById('gender').value = student.gender;
    document.getElementById('dob').value = student.dob;
    document.getElementById('hometown').value = student.hometown;
}

function deleteStudent(id) {
    if (confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
        studentManager.deleteStudent(id);
    }
}
