import React from 'react';
import "./MarkDownOutput.css";
import Showdown from 'showdown';

const MarkDownOutput = (props) => {

  const forceHTMLMarkup = (markdownContent) => {
    const myOutputMDtoHTMLConverter = new Showdown.Converter();
    return {__html: myOutputMDtoHTMLConverter.makeHtml(markdownContent)};
  };

  let myMarkdownText = props.textParam ? 
                       props.textParam : 
                       "# Examplary text\nThis is just a sample text with *italic* and other\ntext styles like **bold** or even lists:  - Item 1\n- Item 2\n- Etc.  \nBut also with [hyperlinks](https://devstory.net/12449/html-hyperlink).  \n## To start with your own content, start entering a title and content below!";

  // Final return of the MardownOutput component  
  return (
    <div className="markdown-output-style" dangerouslySetInnerHTML={forceHTMLMarkup(myMarkdownText)}>
    </div>
  );

};

export default MarkDownOutput;