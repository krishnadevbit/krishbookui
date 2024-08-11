import React, { useState } from "react";
import cn from "classnames";
import styles from "./Planning.module.sass";
import Image from "../Image";
import Form from "../Form";

// Import images
import planningPic1 from "/images/content/planning-pic-1.png";
import planningPic1x2 from "/images/content/planning-pic-1@2x.png";
import planningPicDark1 from "/images/content/planning-pic-dark-1.png";
import planningPicDark1x2 from "/images/content/planning-pic-dark-1@2x.png";

import planningPic2 from "/images/content/planning-pic-2.png";
import planningPic2x2 from "/images/content/planning-pic-2@2x.png";
import planningPicDark2 from "/images/content/planning-pic-dark-2.png";
import planningPicDark2x2 from "/images/content/planning-pic-dark-2@2x.png";

import planningPic3 from "/images/content/planning-pic-3.png";
import planningPic3x2 from "/images/content/planning-pic-3@2x.png";
import planningPicDark3 from "/images/content/planning-pic-dark-3.png";
import planningPicDark3x2 from "/images/content/planning-pic-dark-3@2x.png";

const gallery = [
  {
    src: planningPic1,
    srcSet: planningPic1x2,
    srcDark: planningPicDark1,
    srcSetDark: planningPicDark1x2,
  },
  {
    src: planningPic2,
    srcSet: planningPic2x2,
    srcDark: planningPicDark2,
    srcSetDark: planningPicDark2x2,
  },
  {
    src: planningPic3,
    srcSet: planningPic3x2,
    srcDark: planningPicDark3,
    srcSetDark: planningPicDark3x2,
  },
];

const Planning = ({ classSection, title }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={cn("section", classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            supercharge your planning powers
          </div>
          <h2 className={cn("h2", styles.title)}>{title}</h2>
          <div className={styles.info}>
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </div>
          <Form
            className={styles.form}
            value={phone}
            setValue={setPhone}
            onSubmit={() => handleSubmit()}
            placeholder="Enter your phone number"
            type="tel"
            name="phone"
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
                alt="Planning"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planning;
