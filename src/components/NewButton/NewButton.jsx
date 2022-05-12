import React, { useState } from 'react';
import "./NewButton.css";

const NewButton = (props) => {

  const handleCreateNote = () => {

  };

  return (
    <div className="new-button-container">
      <button className="new-button" onClick={handleCreateNote}>{props.label}</button>
    </div>
  );

};

export default NewButton;