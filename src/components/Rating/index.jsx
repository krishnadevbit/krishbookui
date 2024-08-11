import React from "react";
// import cn from "classnames";
import styles from "./Rating.module.sass";
import Rating from "react-rating";
import rate from "/images/content/rating-star.svg";
import ratefill from "/images/content/rating-star-fill.svg";
const Form = ({ className, initialRating, readonly }) => {
  return (
    <Rating
      className={className}
      initialRating={initialRating}
      readonly={readonly}
      emptySymbol={<img src={rate} className={styles.star} alt="" />}
      fullSymbol={<img src={ratefill} className={styles.star} alt="" />}
    />
  );
};

export default Form;
