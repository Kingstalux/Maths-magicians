/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      display: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const {
      total, next, operation,
    } = this.state;
    const result = calculate({
      total, next, operation,
    }, e.target.value);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });

    if (e.target.value === '=') {
      this.setState({
        display: result.total,
      });
    } else if (e.target.value === 'AC') {
      this.setState({
        display: '0',
      });
    } else {
      const { display } = this.state;
      this.setState({
        display: display === '0' ? `${`${e.target.value}`}` : `${display} ${e.target.value}`,
      });
    }
  }

  render() {
    const { display } = this.state;
    return (
      <div className="body">
        <button className="btn-input" type="button" value="0">{display}</button>
        <button type="button" onClick={this.handleClick} value="AC">AC</button>
        <button type="button" onClick={this.handleClick} value="+/-">+/-</button>
        <button type="button" onClick={this.handleClick} value="%">%</button>
        <button className="color" type="button" onClick={this.handleClick} value="÷">÷</button>
        <button type="button" onClick={this.handleClick} value="7">7</button>
        <button type="button" onClick={this.handleClick} value="8">8</button>
        <button type="button" onClick={this.handleClick} value="9">9</button>
        <button className="color" type="button" onClick={this.handleClick} value="x">×</button>
        <button type="button" onClick={this.handleClick} value="4">4</button>
        <button type="button" onClick={this.handleClick} value="5">5</button>
        <button type="button" onClick={this.handleClick} value="6">6</button>
        <button className="color" type="button" onClick={this.handleClick} value="-">-</button>
        <button type="button" onClick={this.handleClick} value="1">1</button>
        <button type="button" onClick={this.handleClick} value="2">2</button>
        <button type="button" onClick={this.handleClick} value="3">3</button>
        <button className="color" type="button" onClick={this.handleClick} value="+">+</button>
        <button className="btn-0" type="button" onClick={this.handleClick} value="0">0</button>
        <button type="button" onClick={this.handleClick} value=".">.</button>
        <button className="color" type="button" onClick={this.handleClick} value="=">=</button>
      </div>
    );
  }
}
