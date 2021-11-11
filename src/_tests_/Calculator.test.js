import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('matches quote snapshot', () => {
  const calculator = renderer.create(
    <Calculator />,
  ).toJSON();
  expect(calculator).toMatchSnapshot();
});
