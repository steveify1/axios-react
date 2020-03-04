import React from 'react';
import bannerImg from '../../assets/images/mahir-uysal-gK6b8RQUR6k-unsplash.jpg';
import classes from './Banner.module.scss';

export default ({ height }) => {
  return (
    <div className={classes.Banner} style={{ height: height || '300px' }}>
      <div className={`image-wrapper`}>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};
