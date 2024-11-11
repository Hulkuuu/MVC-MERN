import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from './Input'; // Import the Input component
import Button from './AddButton'; // Import the custom Button component
import AllButton from './AllButton'; // Import the AllButton component

function DarkTheme() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL_STUDENTS;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const saveStudent = async () => {
    try {
      const studentData = { name, age, grade };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, studentData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, studentData);
      }

      setName('');
      setAge('');
      setGrade('');
      fetchStudents();
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const editStudent = (student) => {
    setEditingId(student._id);
    setName(student.name);
    setAge(student.age);
    setGrade(student.grade);
  };

  return (
    <div className="container">
      <h2>Student List</h2>

      {/* Use the custom Input component for each input field */}
      <div className="inputs-container">
        <Input
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          placeholder="Enter grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>

      {/* Keep the Add Student Button component as it is */}
      <Button label={editingId ? "Update Student" : "Add Student"} onClick={saveStudent} />

      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - Age: {student.age}, Grade: {student.grade}

            {/* Use AllButton for Edit */}
            <AllButton onClick={() => editStudent(student)} label="Edit" />

            {/* Use AllButton for Delete */}
            <AllButton onClick={() => deleteStudent(student._id)} label="Delete" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DarkTheme;
