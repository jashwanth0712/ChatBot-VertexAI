import React, { useState } from 'react';
import './App.css';

const BottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bottom-sheet-container">
      <button onClick={toggleBottomSheet} className="open-button">
        Open Bottom Sheet
      </button>
      <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
        <h2>Bottom Sheet Content</h2>
        <p>This is your bottom sheet content.</p>
      </div>
    </div>
  );
};

export default BottomSheet;
