import React from 'react';
import styled from 'styled-components';

const AllButton = ({ label, onClick }) => {
  return (
    <StyledWrapper>
      <button className="btn-17" onClick={onClick}>
        <span className="text-container">
          <span className="text">{label}</span>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-block; /* Keep buttons side by side */
  margin: 0 5px; /* Add some space between buttons */

  .btn-17 {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem; /* Reduce font size */
    font-weight: 700;
    padding: 0.5rem 1.5rem; /* Reduce padding */
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    z-index: 0;
    border: none;
    text-transform: uppercase;
  }

  .btn-17 .text-container {
    display: block;
    mix-blend-mode: difference;
  }

  .btn-17 .text {
    display: block;
    position: relative;
  }

  .btn-17:hover .text {
    animation: move-up-alternate 0.3s forwards;
  }

  @keyframes move-up-alternate {
    0% { transform: translateY(0); }
    50% { transform: translateY(80%); }
    51% { transform: translateY(-80%); }
    100% { transform: translateY(0); }
  }

  .btn-17:after,
  .btn-17:before {
    --skew: 0.2;
    background: #fff;
    content: "";
    display: block;
    height: 102%;
    left: calc(-50% - 50% * var(--skew));
    pointer-events: none;
    position: absolute;
    top: -104%;
    transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
    transition: transform 0.2s ease;
    width: 100%;
  }

  .btn-17:after {
    --progress: 0%;
    left: calc(50% + 50% * var(--skew));
    top: 102%;
    z-index: -1;
  }

  .btn-17:hover:before {
    --progress: 100%;
  }

  .btn-17:hover:after {
    --progress: -102%;
  }
`;

export default AllButton;
