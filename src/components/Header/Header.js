import React from 'react'

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Clearview Social Inc</h2>
      <h3>Branding & Customization</h3>
      <hr />
    </div>
  );
};

export default Header;