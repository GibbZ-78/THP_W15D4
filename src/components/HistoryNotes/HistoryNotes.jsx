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

    return (
    <div className="history-notes-container">
      {myNotes.map((myNote, myIndex) => {

          const handleChooseHistoryNote = () => {
            props.funcParam(myNote.title, myNote.content);
          };

          return(
            <div key={myIndex} className="history-note" onClick={handleChooseHistoryNote}>
              <div>
                <p className="history-note-title">{myNote.title}</p>
              </div>
              <div className="history-note-content" dangerouslySetInnerHTML={forceHTMLMarkup(myNote.content)}>
              </div>
            </div>
          );
        }
      )}
    </div>
    );
  } else {
    return(
      <div className="history-note-not-found">
        <p>No history note found</p>
        <p>or your browser does not support "localStorage"</p>
      </div>
    );
  }

};

export default HistoryNotes;