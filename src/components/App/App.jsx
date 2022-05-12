import React from 'react';
import logo from 'assets/logo.svg';
import './App.css';
import MarkDownOutput from 'components/MarkdownOutput/MarkDownOutput';
import MarkDownInput from 'components/MarkdownInput/MarkdownInput';
import MarkDownHistory from 'components/MarkdownHistory/MarkdownHistory';

// const myNotesList = [
//   {title: "Note #1",
//   content: "## Title 2  This is a text containing *italic* and **bold** as well as [hyperlinks](https://devstory.net/12449/html-hyperlink). "},
//   {title: "Note #2",
//   content: "## Title 2  This is a text containing *italic* and **bold** as well as [hyperlinks](https://devstory.net/12449/html-hyperlink). "},
//   {title: "Note #3",
//   content: "## Title 2  This is a text containing *italic* and **bold** as well as [hyperlinks](https://devstory.net/12449/html-hyperlink). "},
// ];

// const myStoredNotesList = JSON.stringify(myNotesList);
// localStorage.setItem('GibbZReactNotepad', myStoredNotesList);

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo-right" alt="logo" />
        <p> GibbZ' React Notepad </p>
        <img src={logo} className="app-logo-left" alt="logo" />
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <MarkDownHistory />
        </div>
        <div className="app-right-column">
          <MarkDownOutput />
          <MarkDownInput />
        </div>
      </main>
      <footer className="app-footer">&copy; 2022 Jean-Baptiste VIDAL for THP Developer Winter'22</footer>
    </div>
  );
}

export default App;


/* 
  <img src={logo} className="app-logo" alt="logo" />
  <a
    className="app-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
  Texte du lien
  </a> 
*/