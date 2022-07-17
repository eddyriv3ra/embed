import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const Button = ({ children, secondary }) => {
  let cx = classNames.bind(styles);

  let className = cx(styles.button, {
    [styles.secondary]: secondary,
  });

  let buttonClasses = cx(styles.buttonText, {
    [styles.text]: secondary,
  });


  return (
    <div className={className}>
      <span className={buttonClasses}>{children}</span>
      <img
        src={`${process.env.PUBLIC_URL}/assets/${secondary ? 'vectorWhite' : 'vector'}.png`}
        alt="vector right"
      />
    </div>
  );
};

export default Button;
