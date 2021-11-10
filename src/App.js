/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <p>Maths Magicians</p>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </div>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<div className="app"><Calculator /></div>} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>
      </div>
    );
  }
}
