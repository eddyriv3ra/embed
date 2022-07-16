import Button from "components/Button";
import React from "react";
import styles from "./FirstSection.module.scss";

const FirstSection = () => {
  return (
    <div className={styles.container}>
      <video
        id="firstSectionVideo"
        autoPlay
        loop
        muted
        className={styles.video}
      >
        <source
          src={`${process.env.PUBLIC_URL}/assets/nft-collectors.mp4`}
          type="video/mp4"
        />
      </video>
      <div className={styles.textContainer}>
        <div className={styles.wrapper}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/group 11@2x.png`}
            alt="section logo"
            className={styles.logo}
          />
          <span className={styles.titleContent}>
            Embed empowers you to monetize your portfolio
          </span>
          <div className={styles.separator} />
          <span className={styles.description}>
            We enable NFT holders to become influencers, build their audience
            through a turn-key solution developed to monetize and transform
            their portfolio into a yielding asset. We create passion-based
            communities.
          </span>
          <Button>
            Join waitlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
