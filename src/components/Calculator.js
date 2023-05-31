import { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import Input from './Input';

const calcData = {
  total: null,
  next: null,
  operation: null,
};

function Calculator() {
  const [result, setResult] = useState(0);

  const handleClick = (buttomName) => {
    const event = { target: { value: buttomName } };
    const { total = null, next = null, operation = null } = calculate(calcData, event.target.value);
    calcData.total = total;
    calcData.next = next;
    calcData.operation = operation;
    if (calcData.next || calcData.total) {
      setResult(calcData.next ? calcData.next : calcData.total);
    } else {
      setResult('0');
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="calc-display">
          <Input result={result} />
        </div>
        <div className="row">
          <Button symbol="AC" onClick={() => handleClick('AC')} />
          <Button symbol="+/-" onClick={() => handleClick('+/-')} />
          <Button symbol="%" onClick={() => handleClick('%')} />
          <Button symbol="÷" onClick={() => handleClick('÷')} />
        </div>
        <div className="row">
          <Button symbol="7" onClick={() => handleClick('7')} />
          <Button symbol="8" onClick={() => handleClick('8')} />
          <Button symbol="9" onClick={() => handleClick('9')} />
          <Button symbol="x" onClick={() => handleClick('x')} />
        </div>
        <div className="row">
          <Button symbol="4" onClick={() => handleClick('4')} />
          <Button symbol="5" onClick={() => handleClick('5')} />
          <Button symbol="6" onClick={() => handleClick('6')} />
          <Button symbol="-" onClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button symbol="1" onClick={() => handleClick('1')} />
          <Button symbol="2" onClick={() => handleClick('2')} />
          <Button symbol="3" onClick={() => handleClick('3')} />
          <Button symbol="+" onClick={() => handleClick('+')} />
        </div>
        <div className="row grid">
          <Button symbol="0" onClick={() => handleClick('0')} />
          <Button symbol="." onClick={() => handleClick('.')} />
          <Button symbol="=" onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
