import React from 'react';
import styles from './header.module.scss';
import { Container } from '../ui/container';
import { HeaderNav } from './header-nav';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <HeaderNav />
      </Container>
    </header>
  );
}
