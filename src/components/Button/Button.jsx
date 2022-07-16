import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children }) => {
  return (
    <div className={styles.button}>
      <span className={styles.buttonText}>{children}</span>
      <img
        src={`${process.env.PUBLIC_URL}/assets/vector.png`}
        alt="vector right"
      />
    </div>
  );
};

export default Button;
