import NewButton from 'components/NewButton/NewButton';
import React from 'react';
import "./MarkDownHistory.css";

const MarkDownHistory = (props) => {

  return (
    <div>
      <p>Left full-height panel</p>
      <NewButton label="Add a new note" />
    </div>
  );

};

export default MarkDownHistory;