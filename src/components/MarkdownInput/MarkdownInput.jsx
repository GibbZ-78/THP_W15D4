import React, { useState } from 'react';
import "./MarkDownInput.css";

const MarkDownInput = (props) => {

  let myTmpTitleParam = props.titleParam ? props.titleParam : "";
  let myTmpContentParam = props.contentParam ? props.contentParam : "";
  const [myState, setState] = useState({myTitle: myTmpTitleParam, myContent: myTmpContentParam});

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
      let myBackedUpNotes = [];
      myBackedUpNotes.push(myCurrentNote);
      let myLocalStorage = JSON.stringify(myBackedUpNotes);
      console.log("  > Backup var stringified as 1st record of new localStorage");
      console.log(myLocalStorage);
      localStorage.setItem('GibbZReactNotepad', myLocalStorage);
    }

  }

  const handleChangeTitle = (event) => {
    
    event.preventDefault();

    if (event.target.value !== null && event.target.value !== undefined) {
      setState({myTitle: event.target.value, myContent: myState.myContent});
    }
    console.log("MarkDownInput says:");
    console.log("  > Title changed to:");
    console.log(myState.myTitle);
  }

  const handleChangeContent = (event) => {
    
    event.preventDefault();
    
    if (event.target.value !== null && event.target.value !== undefined) { 
      setState({myContent: event.target.value, myTitle: myState.myTitle});
      let myTmpText = myState.myTitle+"\n"+myState.myContent;
      props.funcParam(myTmpText);
    }
    console.log("MarkDownInput says:");
    console.log("  > Content changed to:");
    console.log(myState.myContent);
  }

  return (
    <div className="markdown-input-style">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="submit" className="markdown-input-submit" value="Save note in localStorage" />
        </div>
        <div>
          <input type="text" className="markdown-input-title" minLength="8" maxLength="100" size="100" placeholder="Enter a note title..." value={myState.myTitle} onChange={handleChangeTitle} />
        </div>
        <div>
          <textarea className="markdown-input-content" cols="100" rows="20" placeholder="Type in your note in MD format..." value={myState.myContent} onChange={handleChangeContent}></textarea>
        </div>
      </form>
    </div>
  );

};

export default MarkDownInput;