
import React from "react";
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
            <a href="/bubble">Bubble Sort</a>
          </li>
          <li>
            <a href="/seclection">Selection Sort</a>
          </li>
          <li>
            <a href="quick">Quick Sort</a>
          </li>
          <li>
            <a href="merge">Merge Sort</a>
          </li>
        </ul>
      </div>
  
    </div>
  );
};

export default Header;
