import React from 'react';
import "./MarkDownOutput.css";
import Showdown from 'showdown';

const MarkDownOutput = (props) => {

  let myMarkdownText = `
  # Hello World !    
  This is just an example text with *italic* and other  
  text styles like **bold** or:  
  - lists
  - list items
  - etc
  but also with [hyperlinks](https://devstory.net/12449/html-hyperlink)  
  and extraordinary emojis :wink:  
  `;

  if (localStorage.getItem('GibbZReactNotepad')) { 
    let myTmpOutput = JSON.parse(localStorage.getItem('GibbZReactNotepad'));
    myMarkdownText += myTmpOutput[0].title + " | " + myTmpOutput[0].content;
  }

  const forceHTMLMarkup = (markdownContent) => {
    const myOutputMDtoHTMLConverter = new Showdown.Converter();
    return {__html: myOutputMDtoHTMLConverter.makeHtml(markdownContent)};
  };

  return (
    <div className="markdown-output-style" dangerouslySetInnerHTML={forceHTMLMarkup(myMarkdownText)}>
    </div>
  );

};

export default MarkDownOutput;