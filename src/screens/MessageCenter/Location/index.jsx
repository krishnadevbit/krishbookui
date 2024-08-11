import React from "react";
import cn from "classnames";
import styles from "./Location.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import locationx from "/images/content/location-photo@2x.jpg";
import location from "/images/content/location-photo.jpg";
import av1 from "/images/content/avatar-1.jpg";
const items = [
  {
    title: "May 15, 2021",
    category: "Date",
    icon: "calendar",
  },
  {
    title: "2 guests",
    category: "Guest",
    icon: "user",
  },
];

const parameters = [
  {
    title: "1 bedroom",
    icon: "flag",
  },
  {
    title: "1 private bath",
    icon: "flag",
  },
];

const Location = ({ className }) => {
  return (
    <div className={cn(className, styles.location)}>
      <div className={styles.wrapper}>
        <div className={styles.preview}>
          <img
            srcSet={locationx}
            src={location}
            alt="Spectacular views of Queenstown"
          />
          <Link
            className={cn("button-white button-small", styles.button)}
            to="/krishbookui/full-photo"
          >
            <Icon name="image" size="16" />
            <span>Show all photos</span>
          </Link>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>Spectacular views of Queenstown</div>
          <div className={styles.profile}>
            <span>Hosted by</span>
            <div className={styles.avatar}>
              <img src={av1} alt="Avatar" />
            </div>
            <div className={styles.name}>Zoe Towne</div>
          </div>
          <div
            className={cn(styles.description, {
              [styles.flex]: items.length > 1,
            })}
          >
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.icon}>
                  <Icon name={x.icon} size="24" />
                </div>
                <div className={styles.box}>
                  <div className={styles.category}>{x.category}</div>
                  <div className={styles.subtitle}>{x.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.parameters}>
            {parameters.map((x, index) => (
              <div className={styles.parameter} key={index}>
                <Icon name={x.icon} size="20" />
                {x.title}
              </div>
            ))}
          </div>
          <div className={styles.text}>
            Described by Queenstown House & Garden magazine as having 'one of
            the best views we've ever seen' you will love...
          </div>
          <Link
            className={cn("button-stroke button-small", styles.button)}
            to="/krishbookui/cars-product"
          >
            View detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;
