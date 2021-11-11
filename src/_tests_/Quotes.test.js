import React from 'react';
import renderer from 'react-test-renderer';

import Quotes from '../pages/Quotes';

it('matches quote snapshot', () => {
  const quote = renderer.create(
    <Quotes />,
  ).toJSON();
  expect(quote).toMatchSnapshot();
});
