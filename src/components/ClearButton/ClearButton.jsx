import React from 'react';
import "./ClearButton.css";

const ClearButton = (props) => {

  const handleClearLocalStorage = () => {
    localStorage.removeItem("GibbZReactNotepad");
    console.log("  > Your localStorage has been flushed, my Dear!");
  };

  return (
    <div className="clear-button-container">
      <button className="clear-button" onClick={handleClearLocalStorage}>{props.label}</button>
    </div>
  );

};

export default ClearButton;