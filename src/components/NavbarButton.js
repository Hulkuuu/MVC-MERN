import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import styled from 'styled-components';

const NavbarButton = () => {
  return (
    <StyledWrapper>
      <div className="button-container">
        <Link to="/student" className="button">
          <span className="button-text">Student</span>
        </Link>
        <Link to="/faculty" className="button">
          <span className="button-text">Faculty</span>
        </Link>
        <Link to="/upload" className="button"> {/* New Upload Button */}
          <span className="button-text">Upload</span>
        </Link>
        <Link to="/about-me" className="button">
          <span className="button-text">About Me</span>
        </Link>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  
  .button-container {
    display: flex;
    background-color: black;
    width: 400px; /* Increased width for the extra button */
    height: 60px;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
  }

  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 90px;
    height: 50px;
    border-radius: 10px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .button:hover {
    transform: translateY(-3px);
    background-color: #333;
  }

  .button-text {
    font-size: 16px;
  }
`;

export default NavbarButton;
