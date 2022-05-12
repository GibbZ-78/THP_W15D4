import React from 'react';
import "./NewButton.css";

const NewButton = (props) => {

  const handleCreateNote = () => {
    // Does nothing to date
    // Would simply need to reset myTitle and myContent to "" in the MarkdownInput component
    // via another hookup function... Nothing too crazy, nor useful
    console.log("  > This does nothing yet but see comments within code for details ;-)");
  };

  return (
    <div className="new-button-container">
      <button className="new-button" onClick={handleCreateNote}>{props.label}</button>
    </div>
  );

};

export default NewButton;