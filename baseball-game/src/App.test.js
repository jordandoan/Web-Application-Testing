import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <App />
  );
});