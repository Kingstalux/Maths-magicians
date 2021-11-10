/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div>
            <p>Maths Magicians</p>
          </div>
          <div>
            <ul>
              <li className="home">
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="calculator">
                <NavLink to="/calculator" activeClassName="active">Calculator</NavLink>
              </li>
              <li className="quote">
                <NavLink to="/quote" activeClassName="active">Quote</NavLink>
              </li>
            </ul>
          </div>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<div className="app"><Calculator /></div>} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>

        <footer className="footer">
          <p>
            Maths Magicians 2021 - Some rights reserved.
          </p>
          <p>
            @ Kingstalux
          </p>
        </footer>
      </div>
    );
  }
}
