import React from "react";
import styles from "./LastSection.module.scss";

const LastSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <div className={styles.leftSideWraper}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/group 11@2x.png`}
              alt="last section logo"
              className={styles.logo}
            />
            <div className={styles.first}>embed</div>
          </div>
          <p className={styles.branding}>© Embed 2022</p>
        </div>
        <div className={styles.second}>
          <p>
            Embed protocol is a marketing community engine solution for brands
            and NFT holders that discovers, tokenizes, and activates communities
            in the metaverse and web3
          </p>
          <div className={styles.images}>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/linkedin/linkedin.png`}
                alt="last section logo"
                className={styles.logo}
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/telegram/telegram.png`}
                alt="last section logo"
                className={styles.logo}
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/twitter/twitter.png`}
                alt="last section logo"
                className={styles.logo}
              />
            </div>
          </div>
          <p>Legal | Privacy | Careers | Contact</p>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
