import React from 'react';
import "./MarkDownHistory.css";
import NewButton from 'components/NewButton/NewButton';
import HistoryNotes from 'components/HistoryNotes/HistoryNotes';

const MarkDownHistory = (props) => {

  const sendUpwardTitleAndContentToOutputViaApp = (myTmpTitle, myTmpContent) => {
    props.sendUpwardTitleToOutputViaApp(myTmpTitle);
    props.sendUpwardContentToOutputViaApp(myTmpContent);
  };

  return (
    <div className="markdown-history-style">
      <NewButton label="New note" />
      <HistoryNotes funcParam={sendUpwardTitleAndContentToOutputViaApp}/>
    </div>
  );

};

export default MarkDownHistory;