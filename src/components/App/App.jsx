import React, { useState } from 'react';
import logo from 'assets/logo.svg';
import './App.css';
import MarkDownOutput from 'components/MarkdownOutput/MarkDownOutput';
import MarkDownInput from 'components/MarkdownInput/MarkdownInput';
import MarkDownHistory from 'components/MarkdownHistory/MarkdownHistory';

function App() {

  const [appTextParam,setTextParam] = useState("");
  const [appTitleParam,setTitleParam] = useState("");
  const [appContentParam,setContentParam] = useState("");

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo-right" alt="logo" />
        <p> GibbZ' React Notepad </p>
        <img src={logo} className="app-logo-left" alt="logo" />
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <MarkDownHistory sendUpwardTitleToInputViaApp={setTitleParam} sendUpwardContentToInputViaApp={setContentParam} />
        </div>
        <div className="app-right-column">
          <MarkDownOutput textParam={appTextParam} />
          <MarkDownInput titleParam={appTitleParam} contentParam={appContentParam} sendUpwardToOutputViaApp={setTextParam} />
        </div>
      </main>
      <footer className="app-footer">&copy; 2022 Jean-Baptiste VIDAL for THP Developer Winter'22</footer>
    </div>
  );
}

export default App;
