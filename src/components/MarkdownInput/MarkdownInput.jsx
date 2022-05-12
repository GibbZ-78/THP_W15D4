import React, { useState } from 'react';
import "./MarkDownInput.css";

const MarkDownInput = (props) => {

  let myTmpTitleParam = props.titleParam ? props.titleParam : "";
  let myTmpContentParam = props.contentParam ? props.contentParam : "";
  const [myState, setState] = useState({myTitle: myTmpTitleParam, myContent: myTmpContentParam});

  // Launch when "Save" button is pressed
  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    console.log("MarkDownInput says:");
    console.log("  > Trying to add current note to your localStorage");
    
    let myTmpTitle = (myState.myTitle !== "" && myState.myTitle !== null && myState.myTitle !== undefined) ? myState.myTitle : "";
    let myTmpContent = (myState.myContent !== "" && myState.myContent !== null && myState.myContent !== undefined) ? myState.myContent : "";
    let myCurrentNote = {title: myTmpTitle, content: myTmpContent};

    if (myTmpTitle !== "" && myTmpContent !== "") {
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
    } else {
      console.log("  > Save button has been pressed but the note is (partially) empty... No backup then!");
    }

  }

  // Launched each time TITLE of the note changes
  const handleChangeTitle = (event) => {
    
    event.preventDefault();

    if (event.target.value !== null && event.target.value !== undefined) {
      setState({myTitle: event.target.value, myContent: myState.myContent});
      let myTmpText = myState.myTitle+"\n\n"+myState.myContent;
      props.sendUpwardToOutputViaApp(myTmpText);
    }
    console.log("MarkDownInput says:");
    console.log("  > Title changed to:");
    console.log(myState.myTitle);
  }

  // Launched each time CONTENT of the note changes
  const handleChangeContent = (event) => {
    
    event.preventDefault();
    
    if (event.target.value !== null && event.target.value !== undefined) { 
      setState({myContent: event.target.value, myTitle: myState.myTitle});
      let myTmpText = myState.myTitle+"\n\n"+myState.myContent;
      props.sendUpwardToOutputViaApp(myTmpText);
    }
    console.log("MarkDownInput says:");
    console.log("  > Content changed to:");
    console.log(myState.myContent);
  }

  // Final return of the MarkdownInput component
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