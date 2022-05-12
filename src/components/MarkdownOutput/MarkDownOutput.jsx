import React from 'react';
import "./MarkDownOutput.css";
import Showdown from 'showdown';

const converter = new Showdown.Converter();

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

  const forceHTMLMarkup = (markdownContent) => {
    return {__html: converter.makeHtml(markdownContent)};
  };

  return (
    <div className="markdown-output-style" dangerouslySetInnerHTML={forceHTMLMarkup(myMarkdownText)}>
    </div>
  );

};

export default MarkDownOutput;