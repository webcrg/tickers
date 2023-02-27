import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header-nav.module.scss';

const links = [
  { id: 0, title: 'О приложении', link: '/' },
  { id: 1, title: 'Котировки', link: 'prices' },
];

const linkStyles = ({ isActive }: { isActive: boolean }) => ({
  border: isActive ? '2px solid black' : '2px solid transparent',
});

export function HeaderNav() {
  return (
    <nav className={styles['header-nav']}>
      {links.map(({ id, title, link }) => (
        <NavLink key={id} to={link} className={styles.link} style={linkStyles}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
}
