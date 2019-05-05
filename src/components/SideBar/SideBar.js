import React from 'react'
import { connect } from 'react-redux';

import styles from './SideBar.module.css';

const SideBar = ({ uploadedLogo }) => {
  return (
    <div className={styles.sidebar}>
      <div className="section">
        <img
          src={uploadedLogo}
          alt="logo"
        />
        <div className={styles.item}>
          <i class="far fa-newspaper"></i> Content
        </div>
        <div className={styles.item}>
          <i class="far fa-calendar-check"></i> Calendar
        </div>
        <div className={styles.item}>
          <i class="fas fa-chart-line"></i> Results
        </div>
        <div className={styles.item}>
          <i class="far fa-question-circle"></i> Help
        </div>
        <br />
        <hr />
      </div>
      <div className="section">
        <div className={styles.item}>Admin</div>
        <div className={styles.item}>Queues</div>
        <div className={styles.item}>
          <i class="far fa-thumbs-up"></i> Engagement
        </div>
        <div className={styles.item}>
          <i class="fas fa-sliders-h"></i> Settings
        </div>
        <div className={styles.item}>Users</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { uploadedLogo: state.uploadedLogo };
}

export default connect(mapStateToProps)(SideBar);