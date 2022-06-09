import React from 'react';
import { Translate } from 'react-redux-i18n';

import './AppHeader.scss';

const AppHeader = () => {
  return (
    <h1 className="app-title">
      <Translate value="application.appTitle" />
    </h1>
  );
};

export default AppHeader;
