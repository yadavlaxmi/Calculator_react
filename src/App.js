import React, { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function handleOperation(operation) {
    return function(e) {
      e.preventDefault();
      const inputValue = Number(inputRef.current.value);
      if (isNaN(inputValue)) {
        setErrorMessage("Please enter a valid number.");
        return;
      }
      setErrorMessage("");
      setResult(prevResult => {
        switch (operation) {
          case 'plus':
            return prevResult + inputValue;
          case 'minus':
            return prevResult - inputValue;
          case 'times':
            return prevResult * inputValue;
          case 'divide':
            if (inputValue === 0) {
              setErrorMessage("Cannot divide by zero.");
              return prevResult;
            }
            return prevResult / inputValue;
          default:
            return prevResult;
        }
      });
      inputRef.current.value = "";
    };
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
    setErrorMessage("");
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    setErrorMessage("");
  }

  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          Result: <span style={{ color: 'blue', fontWeight: 'bold' }}>{result}</span>
        </p>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          style={{
            fontSize: '20px',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
              fontSize: '20px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid gray',
              background: 'whitesmoke',
              marginRight: '5px'
            }}
            onClick={handleOperation('plus')}
          >
            +
          </button>
          <button
            style={{
              fontSize: '20px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid gray',
              background: 'whitesmoke',
              marginRight: '5px'
            }}
            onClick={handleOperation('minus')}
          >
            -
          </button>
          <button
            style={{
              fontSize: '20px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid gray',
              background: 'whitesmoke',
              marginRight: '5px'
            }}
            onClick={handleOperation('times')}
          >
            *
          </button>
          <button
            style={{
              fontSize: '20px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid gray',
              background: 'whitesmoke',
              marginRight: '5px'
            }}
            onClick={handleOperation('divide')}
          >
            /
          </button>
          <button
            style={{
              fontSize: '20px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid gray',
              background: 'whitesmoke',
              marginRight: '5px'
            }}
            onClick={resetInput}
          >
            Reset Input
          </button>
          <button
            style={{
              fontSize: '20px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid gray',
              background: 'tomato',
              color: 'white'
            }}
            onClick={resetResult}
          >
            Reset Result
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

