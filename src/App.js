import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentList from './components/StudentList';
import NavbarButton from './components/NavbarButton';
import FacultyList from './components/FacultyList';
import SocialsCard from './components/SocialsCard';
import FileUpload from './components/FileUpload'; // Import FileUpload component

function App() {
  return (
    <Router>
      <NavbarButton />
      <h1>EduPortal - Portal For Students And Faculties</h1>
      <Routes>
        <Route path="/student" element={<StudentList />} />
        <Route path="/faculty" element={<FacultyList />} />
        <Route path="/upload" element={<FileUpload />} /> {/* Add FileUpload route */}
        <Route path="/about-me" element={<SocialsCard />} />
        <Route path="/" element={<StudentList />} />
      </Routes>
    </Router>
  );
}

export default App;
