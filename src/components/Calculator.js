/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="body">
        <button className="btn-input" type="button">0</button>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="color" type="button">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="color" type="button">×</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="color" type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="color" type="button">+</button>
        <button className="btn-0" type="button">0</button>
        <button type="button">.</button>
        <button className="color" type="button">=</button>
      </div>
    );
  }
}
