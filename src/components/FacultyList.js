import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from './Input'; // Import the Input component
import Button from './AddButton'; // Import the custom Button component
import AllButton from './AllButton'; // Import the AllButton component

function DarkTheme() {
  const [faculties, setFaculties] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL_FACULTIES;

  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get(API_URL);
      setFaculties(response.data);
    } catch (error) {
      console.error("Error fetching faculties:", error);
    }
  };

  const saveFaculty = async () => {
    try {
      const facultyData = { name, age, department, position };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, facultyData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, facultyData);
      }

      setName('');
      setAge('');
      setDepartment('');
      setPosition('');
      fetchFaculties();
    } catch (error) {
      console.error("Error saving faculty:", error);
    }
  };

  const deleteFaculty = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchFaculties();
    } catch (error) {
      console.error("Error deleting faculty:", error);
    }
  };

  const editFaculty = (faculty) => {
    setEditingId(faculty._id);
    setName(faculty.name);
    setAge(faculty.age);
    setDepartment(faculty.department);
    setPosition(faculty.position);
  };

  return (
    <div className="container">
      <h2>Faculty List</h2>

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
          placeholder="Enter department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <Input
          placeholder="Enter position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      {/* Keep the Add Faculty Button component as it is */}
      <Button label={editingId ? "Update Faculty" : "Add Faculty"} onClick={saveFaculty} />

      <ul>
        {faculties.map(faculty => (
          <li key={faculty._id}>
            {faculty.name} - Age: {faculty.age}, Department: {faculty.department}, Position: {faculty.position}

            {/* Use AllButton for Edit */}
            <AllButton onClick={() => editFaculty(faculty)} label="Edit" />

            {/* Use AllButton for Delete */}
            <AllButton onClick={() => deleteFaculty(faculty._id)} label="Delete" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DarkTheme;
