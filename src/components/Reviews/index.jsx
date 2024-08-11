import React, { useState } from "react";
import cn from "classnames";
import styles from "./Reviews.module.sass";
import av1 from "/images/content/avatar-1.jpg";
import av3 from "/images/content/avatar-3.jpg";
const items = [
  {
    title: "Review about you",
    reviews: [
      {
        author: "Tobin Hackett",
        avatar: av1,
        time: "about 1 hour ago",
        content:
          "I enjoyed my communication with them and wish them only the best!",
      },
      {
        author: "Myrtie Runolfsson",
        avatar: av3,
        time: "1 day ago",
        content:
          "Kohaku and her husband were great guests. I enjoyed my communication with them and wish them only the best!",
      },
    ],
  },
  {
    title: "Reviews by you",
    reviews: [
      {
        author: "Myrtie Runolfsson",
        avatar: av3,
        time: "about 1 hour ago",
        content:
          "Kohaku and her husband were great guests. I enjoyed my communication with them and wish them only the best!",
      },
      {
        author: "Tobin Hackett",
        avatar: av1,
        time: "1 day ago",
        content:
          "I enjoyed my communication with them and wish them only the best!",
      },
    ],
  },
];

const Reviews = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn(className, styles.reviews)}>
      <div className={styles.head}>
        <div className={styles.title}>2 reviews</div>
        <div className={styles.nav}>
          {items.map((x, index) => (
            <button
              className={cn(styles.link, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
            >
              {x.title}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.group}>
        {items[activeIndex].reviews.map((x, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.avatar}>
              <img src={x.avatar} alt="Avatar" />
            </div>
            <div className={styles.details}>
              <div className={styles.author}>{x.author}</div>
              <div className={styles.content}>{x.content}</div>
              <div className={styles.foot}>
                <div className={styles.time}>{x.time}</div>
                <div className={styles.actions}>
                  <button className={styles.action}>Like</button>
                  <button className={styles.action}>Reply</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
