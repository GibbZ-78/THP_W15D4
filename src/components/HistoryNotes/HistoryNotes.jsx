import React from 'react';
import "./HistoryNotes.css";
import Showdown from 'showdown';

const HistoryNotes = (props) => {

  if (localStorage.getItem('GibbZReactNotepad')) { 

    let myNotes = JSON.parse(localStorage.getItem('GibbZReactNotepad'));

    const forceHTMLMarkup = (markdownContent) => {
      const myHistoryNotesMDtoHTMLConverter = new Showdown.Converter();
      return {__html: myHistoryNotesMDtoHTMLConverter.makeHtml(markdownContent)};
    };

    // Final return of the HistoryNotes component when localStorage contains at least 1 note
    return (
    <div className="history-notes-container">
      {myNotes.map((myNote, myIndex) => {

          // Hook-up function to transfer TITLE and CONTENT from HistoryNotes to MarkDownInput
          const handleChooseHistoryNote = () => {
            console.log("  > History note '"+myNote.title+"("+myIndex+")' has been clicked. Launching 'upwardHookFunction'");
            props.upwardHookFunction(myNote.title, myNote.content);
          };

          // Final return of each mapped HistoryNote component within the HistoryNotes one
          return(
            <div key={myIndex} className="history-note" onClick={handleChooseHistoryNote}>
              <div>
                <p className="history-note-title">{myNote.title}</p>
              </div>
              <div className="history-note-content" dangerouslySetInnerHTML={forceHTMLMarkup(myNote.content.substring(0,120)+"...")}>
              </div>
            </div>
          );
        }
      )}
    </div>
    );
  } else {
    // Final return of the HistoryNotes component when localStorage is empty
    return(
      <div className="history-note-not-found">
        <p>No history note found</p>
        <p>or your browser does not support "localStorage"</p>
      </div>
    );
  }

};

export default HistoryNotes;