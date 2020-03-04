import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';

export default () => {
  return (
    <Fragment>
      <Route path="/" component={Home} />
    </Fragment>
  );
};
