import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import Button from '../Buttons/Button';
import classes from './NavBar.module.scss';

const mainMenuItems = [
  { displayName: 'home', href: '/' },
  { displayName: 'popular', href: '/popular' },
  { displayName: 'explore', href: '/explore', subMenu: [{}] }
  // { displayName: 'about me', href: '/me' }
];

export default props => {
  const setMenuContent = item => {
    return item.href ? (
      <NavLink exact to={item.href}>
        {item.displayName}
      </NavLink>
    ) : (
      item.displayName
    );
  };

  const getTemplate = (item, index) => (
    <li key={index} className="menu-item">
      {setMenuContent(item)}
    </li>
  );

  const makeNavMenu = (menuItems = []) => {
    return (
      <ul className={classes.MainMenu}>
        {menuItems.map((item, index) => getTemplate(item, index))}
      </ul>
    );
  };

  return (
    <div className="navbar-container">
      <nav className={classes.NavBar}>
        <div className="brand logo">
          <NavLink to="/">
            <h2>GirlWhisper</h2>
          </NavLink>
        </div>

        {makeNavMenu(mainMenuItems)}

        <ul className={classes.MainMenu}>
          <li>
            <IoIosSearch className="icon" />
          </li>
          <li>
            <Button type="Outlined">login</Button>
          </li>

          <li>
            <Button type="Primary">sign up</Button>
          </li>
        </ul>

        {/* {makeNavMenu()} */}
      </nav>
    </div>
  );
};
