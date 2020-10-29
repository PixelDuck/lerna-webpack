import React, { useEffect, useState } from 'react';
import './App.css';

import '@my-lerna-library/another-package';
import { Test } from 'my-lerna-library';

const App = () => {
  const [test, setTest] = useState(null);
  const [testFromAnotherPackage, setTestFromAnotherPackage] = useState(null);
  const [bigSvg, setBigSvg] = useState(null);
  useEffect(() => {
    const mytest = new Test(); 
    if (mytest) {
      setTestFromAnotherPackage(mytest.testFromAnotherPackage());
      setBigSvg(mytest.bigSVGFromAnotherPackage());
      setTest(mytest.test());
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Message from test: {test} <br />
          Message from testFromAnotherFile: {testFromAnotherPackage} <br />
        </p>
        <img src={bigSvg} alt="loaded from UDM module" />
      </header>
    </div>
  );
}

export default App;
