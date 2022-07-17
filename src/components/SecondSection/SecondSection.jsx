import Button from "components/Button";
import React from "react";
import styles from "./SecondSection.module.scss";

const SecondSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.secondSectionTitle}>Lead the change</h2>
          <span className={styles.description}>
            In a decentralised world, you power the brand. Influence the way
            brands will look in the metaverse and build a community around those
            you love.
          </span>
          <span className={styles.firstDescription}>
            Be a part of the change and join Embed’s decentralized protocol
            today
          </span>
          <Button>Join waitlist</Button>
        </div>
        <video
          id="secondSectionVideo"
          autoPlay
          loop
          muted
          className={styles.video}
        >
          <source
            src={`${process.env.PUBLIC_URL}/assets/nft-montage-earn.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.bottomTextWrapper}>
        <span className={styles.bottomText}>
          The trademarks, logos and brand names that appear on this website are
          used for informational or editorial purposes and are the property of
          their respective owners. Use of these trademarks, logos and brand
          names does not imply any affiliation with or endorsement by their
          owners.
        </span>
      </div>
    </div>
  );
};

export default SecondSection;
