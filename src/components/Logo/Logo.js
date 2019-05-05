import React from 'react';
import { connect } from 'react-redux';

import styles from './Logo.module.css';

const Logo = ({ uploadedLogo }) => {
  if (!uploadedLogo) {
    return <div>Upload a logo</div>;
  }

  return (
    <div className={styles.logo}>
      <h2>Current Logo</h2>
      <img src={uploadedLogo} alt="logo" />
    </div>
  )
}

const mapStateToProps = state => {
  return { uploadedLogo: state.uploadedLogo };
} 

export default connect(mapStateToProps)(Logo);