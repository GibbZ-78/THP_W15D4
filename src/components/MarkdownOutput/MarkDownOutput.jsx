import React from 'react';
import "./MarkDownOutput.css";
import Showdown from 'showdown';

const MarkDownOutput = (props) => {

  if (props.textParam) {
    let myMarkdownText = props.textParam;
  } else {
    let myMarkdownText = `# Examplary text
                          This is just a sample text with *italic* and other  
                          text styles like **bold** or even lists:  
                          - Item 1
                          - Item 2
                          - Etc.
                          but also with [hyperlinks](https://devstory.net/12449/html-hyperlink).
                        `;
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