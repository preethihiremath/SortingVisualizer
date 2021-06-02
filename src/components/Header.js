
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
              <h2>   Sorting Visualizer</h2>
        </div>
        <ul  className="signin-up">
          <li>
            <a href="#">Bubble Sort</a>
          </li>
          <li>
            <a href="#">Selection Sort</a>
          </li>
          <li>
            <a href="#">Quick Sort</a>
          </li>
          <li>
            <a href="#">Merge Sort</a>
          </li>
        </ul>
      </div>
  
    </div>
  );
};

export default Header;
