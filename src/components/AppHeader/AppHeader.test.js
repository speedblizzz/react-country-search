import React from 'react';
import { render } from '@testing-library/react';

import AppHeader from './AppHeader';

test('should ', () => {
  const { container } = render(<AppHeader />);
  expect(container).toMatchSnapshot();
});
