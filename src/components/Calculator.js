import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    display: '0',
  });
  const handleClick = (e) => {
    const {
      total, next, operation, display,
    } = state;
    const result = calculate({ total, next, operation }, e.target.value);
    setState(() => ({
      total: result.total,
      next: result.next,
      operation: result.operation,
      display: display === '0' ? `${`${e.target.value}`}` : `${display} ${e.target.value}`,
    }));
    console.log(result.total);
    if (e.target.value === 'AC') {
      setState(() => ({
        display: '0',
      }));
    } else if (e.target.value === '=') {
      setState(() => ({
        display: result.total,
      }));
    }
    //  else {
    //   const { display } = state;
    //   setState(() => ({
    //     display: display === '0' ? `${`${e.target.value}`}` : `${display} ${e.target.value}`,
    //   }));
    // }
  };
  return (
    <div className="body">
      <button className="btn-input" type="button" value="0">{state.display}</button>
      <button type="button" onClick={handleClick} value="AC">AC</button>
      <button type="button" onClick={handleClick} value="+/-">+/-</button>
      <button type="button" onClick={handleClick} value="%">%</button>
      <button className="color" type="button" onClick={handleClick} value="÷">÷</button>
      <button type="button" onClick={handleClick} value="7">7</button>
      <button type="button" onClick={handleClick} value="8">8</button>
      <button type="button" onClick={handleClick} value="9">9</button>
      <button className="color" type="button" onClick={handleClick} value="x">×</button>
      <button type="button" onClick={handleClick} value="4">4</button>
      <button type="button" onClick={handleClick} value="5">5</button>
      {' '}
      <button type="button" onClick={handleClick} value="6">6</button>
      <button className="color" type="button" onClick={handleClick} value="-">-</button>
      <button type="button" onClick={handleClick} value="1">1</button>
      <button type="button" onClick={handleClick} value="2">2</button>
      <button type="button" onClick={handleClick} value="3">3</button>
      <button className="color" type="button" onClick={handleClick} value="+">+</button>
      <button className="btn-0" type="button" onClick={handleClick} value="0">0</button>
      {' '}
      <button type="button" onClick={handleClick} value=".">.</button>
      <button className="color" type="button" onClick={handleClick} value="=">=</button>
    </div>
  );
}
