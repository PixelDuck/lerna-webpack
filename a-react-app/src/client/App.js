import React, { useEffect, useState } from 'react';
import './App.css';

import Test, { AnotherClass } from 'my-library';

const App = () => {
  const [test, setTest] = useState(null);
  const [anotherObj, setAnotherObj] = useState(null);
  useEffect(() => {
    console.info("called!")
    if (!test)
      setTest(new Test());
    if (!anotherObj)
      setAnotherObj(new AnotherClass());
  }, [test, anotherObj]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Message from test: {test?.test()} <br />
          Message from anotherObj: {anotherObj?.test()} <br />
          Message from anotherObj from test: {test?.testFromAnotherFile()} 
        </p>
      </header>
    </div>
  );
}

export default App;
