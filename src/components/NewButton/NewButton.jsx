import React, { useState } from 'react';
import "./NewButton.css";

const NewButton = (props) => {

  return (
    <div className="new-button-container">
      <button className="new-button">{props.label}</button>
    </div>
  );

};

export default NewButton;