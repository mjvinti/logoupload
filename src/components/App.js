import React from 'react';

import styles from './App.module.css';

import Logo from './Logo/Logo';
import LogoDrop from './LogoDrop/LogoDrop';
import SideBar from './SideBar/SideBar';

const App = () => {
  return (
    <div className={styles.app}> 
      <SideBar />
      <LogoDrop />
      <Logo />
    </div>
  )
};

export default App;