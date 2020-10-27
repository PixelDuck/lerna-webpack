import React from 'react';
import './App.css';

import '@my-lerna-library/another-package';
import { Test }  from 'my-lerna-library';

const test = new Test();
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Message from test: {test?.test()} <br />
          Message from testFromAnotherFile: {test?.testFromAnotherPackage()} <br />
        </p>
        <img src={test?.iconFromAnotherPackage()} alt="loaded from UMD module" />
      </header>
    </div>
  );
}

export default App;
