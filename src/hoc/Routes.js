import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Fragment>
      <Route path='/' render={<h1>Hello world</h1>} />
    </Fragment>
  )
}