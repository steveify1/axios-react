import React from 'react';
import NavBar from '../NavBar/NavBar';
import Routes from '../../hoc/Routes';
import classes from './OutermostContainer.module.scss';

export default () => {
  return (
    <div className={classes.OutermostContainer}>
      <NavBar />
      {/* 
      <br /> */}
      <main>
        <Routes />
      </main>
    </div>
  );
};
