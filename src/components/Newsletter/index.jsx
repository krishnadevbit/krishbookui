import React, { useState } from "react";
import cn from "classnames";
import styles from "./Newsletter.module.sass";
import Image from "../Image";
import Form from "../Form";

// Import images
import newsletterPic1 from "/images/content/newsletter-pic-1.png";
import newsletterPic1x2 from "/images/content/newsletter-pic-1@2x.png";
import newsletterPicDark1 from "/images/content/newsletter-pic-dark-1.png";
import newsletterPicDark1x2 from "/images/content/newsletter-pic-dark-1@2x.png";

import newsletterPic2 from "/images/content/newsletter-pic-2.png";
import newsletterPic2x2 from "/images/content/newsletter-pic-2@2x.png";
import newsletterPicDark2 from "/images/content/newsletter-pic-dark-2.png";
import newsletterPicDark2x2 from "/images/content/newsletter-pic-dark-2@2x.png";

import newsletterPic3 from "/images/content/newsletter-pic-3.png";
import newsletterPic3x2 from "/images/content/newsletter-pic-3@2x.png";
import newsletterPicDark3 from "/images/content/newsletter-pic-dark-3.png";
import newsletterPicDark3x2 from "/images/content/newsletter-pic-dark-3@2x.png";

import newsletterPic4 from "/images/content/newsletter-pic-4.png";
import newsletterPic4x2 from "/images/content/newsletter-pic-4@2x.png";
import newsletterPicDark4 from "/images/content/newsletter-pic-dark-4.png";
import newsletterPicDark4x2 from "/images/content/newsletter-pic-dark-4@2x.png";

const gallery = [
  {
    src: newsletterPic1,
    srcSet: newsletterPic1x2,
    srcDark: newsletterPicDark1,
    srcSetDark: newsletterPicDark1x2,
  },
  {
    src: newsletterPic2,
    srcSet: newsletterPic2x2,
    srcDark: newsletterPicDark2,
    srcSetDark: newsletterPicDark2x2,
  },
  {
    src: newsletterPic3,
    srcSet: newsletterPic3x2,
    srcDark: newsletterPicDark3,
    srcSetDark: newsletterPicDark3x2,
  },
  {
    src: newsletterPic4,
    srcSet: newsletterPic4x2,
    srcDark: newsletterPicDark4,
    srcSetDark: newsletterPicDark4x2,
  },
];

const items = [
  {
    title: "Get more discount",
    color: "#58C27D",
  },
  {
    title: "Get premium travel magazine",
    color: "#92A5EF",
  },
];

const Newsletter = ({ classSection, title }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={cn("section", classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            Join our newsletter{" "}
            <span role="img" aria-label="firework">
              🎉
            </span>
          </h2>
          <div className={styles.info}>
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.number}
                  style={{ backgroundColor: x.color }}
                >
                  0{index + 1}
                </div>
                <div className={styles.text}>{x.title}</div>
              </div>
            ))}
          </div>
          <Form
            className={styles.form}
            value={email}
            setValue={setEmail}
            onSubmit={() => handleSubmit()}
            placeholder="Enter your email"
            type="email"
            name="email"
            icon="arrow-next"
          />
        </div>
        <div className={styles.gallery}>
          {gallery.map((x, index) => (
            <div className={styles.preview} key={index}>
              <Image
                srcSet={`${x.srcSet} 2x`}
                srcSetDark={`${x.srcSetDark} 2x`}
                src={x.src}
                srcDark={x.srcDark}
                alt="Newsletter"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
