import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import classes from './Home.module.scss';

export default props => {
  const { posts, setPosts } = useState([]);

  return (
    <div className={classes.Home}>
      <Banner />
    </div>
  );
};
