import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route
import './App.css'; // Import the CSS file here
import StudentList from './components/StudentList';
import NavbarButton from './components/NavbarButton';
import FacultyList from './components/FacultyList';  // Import the FacultyList component
import SocialsCard from './components/SocialsCard';
function App() {
  return (
    <Router>
      <NavbarButton />
      <h1>EduPortal - Portal For Students And Faculties</h1>
      <Routes>
        {/* Define the routes for each component */}
        <Route path="/student" element={<StudentList />} />
        <Route path="/faculty" element={<FacultyList />} />  {/* Route for FacultyList */}
        <Route path="/about-me" element={<SocialsCard />} />  {/* Route for SocialsCard */}
        
        {/* Default Route */}
        <Route path="/" element={<StudentList />} />
      </Routes>
    </Router>
  );
}

export default App;
