import Button from "components/Button";
import React from "react";
import styles from "./FifthSection.module.scss";

const FifthSection = () => {
  return (
    <div className={styles.container}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/neon-nightclub.jpg`}
        alt="first vector"
        className={styles.image}
      />
      <div className={styles.bottom}>
        <h2 className={styles.text}>Join the waitlist</h2>
        <Button secondary>Join waitlist</Button>
      </div>
    </div>
  );
};

export default FifthSection;
