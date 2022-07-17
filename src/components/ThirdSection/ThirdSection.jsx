import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAsync } from "redux/dataSlice";
import classNames from "classnames/bind";
import styles from "./ThirdSection.module.scss";

const ThirdSection = () => {
  let cx = classNames.bind(styles);
  const data = useSelector(({ data }) => data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>The Embed-to-Earn Model</h2>
        <div className={styles.boxesContainer}>
          {data.map((d, index) => {
            let className = cx(styles.box, {
              [styles.secondBox]: index === 1,
              [styles.thirdBox]: index === 2,
            });
            return (
              <div className={styles.boxWrapper}>
                <div key={d.id} className={className}>
                  <div className={styles.boxContent}>
                    <h2>{d.title}</h2>
                    <p className={styles.description}>{d.desc}</p>
                  </div>
                </div>
                {index !== data.length - 1 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/vectorWhite.png`}
                    alt="vector right"
                    className={styles.vector}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
