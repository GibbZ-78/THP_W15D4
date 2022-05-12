import React, { useState } from 'react';
import "./MarkDownInput.css";

const MarkDownInput = (props) => {

  const [myState, setState] = useState({myTitle: "", myContent: ""});

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    console.log("MarkDownInput says:");
    console.log("  > Trying to add current note to your localStorage");
    
    let myTmpTitle = (myState.myTitle !== null && myState.myTitle !== undefined) ? myState.myTitle : "<empty title>";
    let myTmpContent = (myState.myContent !== null && myState.myContent !== undefined) ? myState.myContent : "<empty content>";
    let myCurrentNote = {title: myTmpTitle, content: myTmpContent};

    if (localStorage.getItem('GibbZReactNotepad')) { 
      let myBackedUpNotes = JSON.parse(localStorage.getItem('GibbZReactNotepad'));
      console.log("  > localStorage available hence enriching it");
      myBackedUpNotes.push(myCurrentNote);
      console.log("  > Current note added to overall backup var");
      console.log(myBackedUpNotes);
      let myLocalStorage = JSON.stringify(myBackedUpNotes);
      console.log("  > Backup var stringified to integrate localStorage");
      console.log(myLocalStorage);
      localStorage.setItem('GibbZReactNotepad', myLocalStorage);
    } else {
      console.log("  > localStorage not initialized yet. Working on it!");
      let myLocalStorage = JSON.stringify([myCurrentNote]);
      console.log("  > Backup var stringified as 1st record of new localStorage");
      console.log(myLocalStorage);
      localStorage.setItem('GibbZReactNotepad', myLocalStorage);
    }

  }

  const handleChangeTitle = (event) => {
    setState({myTitle: event.target.value});
    console.log("MarkDownInput says:");
    console.log("  > Title changed to :");
    console.log(myState.myTitle);
  }

  const handleChangeContent = (event) => {
    setState({myContent: event.target.value});
    console.log("MarkDownInput says:");
    console.log("  > Content changed :");
    console.log(myState.myContent);
  }

  return (
    <div className="markdown-input-style">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" className="markdown-input-title" minLength="8" maxLength="100" size="100" placeholder="Enter a note title..." value={myState.myTitle} onChange={handleChangeTitle} />
        </div>
        <div>
          <textarea className="markdown-input-content" cols="100" rows="20" placeholder="Type in your note in MD format..." value={myState.myContent} onChange={handleChangeContent}></textarea>
        </div>
        <div>
          <input type="submit" className="markdown-input-submit" value="Save note in localStorage" />
        </div>
      </form>
    </div>
  );

};

export default MarkDownInput;