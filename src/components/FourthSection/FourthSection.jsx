import Button from "components/Button";
import React from "react";
import styles from "./FourthSection.module.scss";

const fakeData = [
  {
    id: 1,
    title: "Match",
    icon: "firstVector",
    texts: [
      "Join Embed",
      " Pick and get matched with brands that resonate with the things you’re passionate about",
    ],
  },
  {
    id: 2,
    title: "Tokenize",
    icon: "secondVector",
    texts: [
      "Get branded NFTs that unlock rewards based on your engagement in the metaverse",
      "Collaborate with brands on long-lasting campaigns in the Embed network",
      "Connect with exclusive communities, build connections, increase your impact",
    ],
  },
  {
    id: 3,
    title: "Earn",
    icon: "thirdVector",
    texts: [
      "Collect rewards in tokens and NFT",
      "Get extra value from exclusive communities, meta-physical events, and our special offers on products/services",
    ],
  },
];

const FourthSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.h2}>How to earn with Embed</h2>
        <h3 className={styles.h3}>Three simple steps to get your started.</h3>
      </div>
      <div className={styles.infoContainer}>
        {fakeData.map((data) => {
          return (
            <div className={styles.icon} key={data.id}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/${data.icon}.png`}
                alt="first vector"
                className={styles.image}
              />
              <h2 className={styles.title}>{data.title}</h2>
              <div className={styles.separator} />
              <div className={styles.paragraphContainer}>
                {data.texts.map((text, index) => {
                  return (
                    <p key={index} className={styles.paragraph}>
                      <span>{index + 1} .</span>
                      {text}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.bottom}>
        <p className={styles.bottomText}>Be part of the alpha launch</p>
        <Button>Join waitlist</Button>
      </div>
    </div>
  );
};

export default FourthSection;
