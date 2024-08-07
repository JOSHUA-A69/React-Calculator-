import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [display, setDisplay] = useState('0');
  const [currentInput, setCurrentInput] = useState('');
  const [operator, setOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState('');

  const handleNumberClick = (number) => {
    if (currentInput.length === 0 && number === '0') return; 
    setCurrentInput(currentInput + number);
    setDisplay(currentInput + number);
  };

  const handleOperatorClick = (operator) => {
    if (currentInput === '') return;
    setOperator(operator);
    setPreviousInput(currentInput);
    setCurrentInput('');
  };

  const handleDecimalClick = () => {
    if (currentInput.includes('.')) return;
    setCurrentInput(currentInput + '.');
    setDisplay(currentInput + '.');
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentInput('');
    setPreviousInput('');
    setOperator(null);
  };

  const handleEqualsClick = () => {
    if (operator && previousInput && currentInput) {
      const result = eval(`${previousInput} ${operator} ${currentInput}`);
      setDisplay(result.toString());
      setCurrentInput(result.toString());
      setPreviousInput('');
      setOperator(null);
    }
  };

  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <button id="clear" onClick={handleClear}>AC</button>
      <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
      <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
      <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
      <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
      <button id="equals" onClick={handleEqualsClick}>=</button>
      <button id="decimal" onClick={handleDecimalClick}>.</button>
      {[...Array(10).keys()].map(num => (
        <button key={num} id={['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][num]} onClick={() => handleNumberClick(num.toString())}>
          {num}
        </button>
      ))}
    </div>
  );
};

export default App;
