import React from 'react';
import "./MarkDownHistory.css";
import NewButton from 'components/NewButton/NewButton';
import HistoryNotes from 'components/HistoryNotes/HistoryNotes';

const MarkDownHistory = (props) => {

  // Hook-up function to make TITLE and CONTENT bubble-up
  const sendUpwardTitleAndContentToOutputViaApp = (myTmpTitle, myTmpContent) => {
    console.log("  > Launching 'sendUpwardTitleAndContentToOutputViaApp'");
    console.log(`    > with myTmpTitle = ${myTmpTitle}`);
    console.log(`    > and myTmpContent = ${myTmpContent}`);
    props.sendUpwardTitleToInputViaApp(myTmpTitle);
    props.sendUpwardContentToInputViaApp(myTmpContent);
  };

  // Final return of the component
  return (
    <div className="markdown-history-style">
      <NewButton label="Create new note (WIP)" />
      <HistoryNotes upwardHookFunction={sendUpwardTitleAndContentToOutputViaApp}/>
    </div>
  );

};

export default MarkDownHistory;