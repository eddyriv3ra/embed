import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/union.png`}
            alt="header logo"
            className={styles.logo}
          />
          <h1>embed</h1>
        </div>
        <div className={styles.navItems}>
          <a href="#">Home</a>
          <a href="#">Earn</a>
          <a href="#">Promote</a>
          <a href="#">Join Waitlist</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
