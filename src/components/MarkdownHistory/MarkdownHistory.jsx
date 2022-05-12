import React from 'react';
import "./MarkDownHistory.css";
import NewButton from 'components/NewButton/NewButton';
import HistoryNotes from 'components/HistoryNotes/HistoryNotes';

const MarkDownHistory = (props) => {

  return (
    <div className="markdown-history-style">
      <NewButton label="New note" />
      <HistoryNotes />
    </div>
  );

};

export default MarkDownHistory;