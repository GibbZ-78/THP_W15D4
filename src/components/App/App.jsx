import React from 'react';
import logo from 'assets/logo.svg';
import './App.css';
import MarkDownOutput from 'components/MarkdownOutput/MarkDownOutput';
import MarkDownInput from 'components/MarkdownInput/MarkdownInput';
import MarkDownHistory from 'components/MarkdownHistory/MarkdownHistory';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p> GibbZ' React Notepad </p>
        <img src={logo} className="app-logo" alt="logo" />
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