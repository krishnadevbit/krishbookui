import React, { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "../../../components/Image";
import Form from "../../../components/Form";

// Import images
import supportPic1 from "/images/content/support-pic-1.png";
import supportPic1x2 from "/images/content/support-pic-1@2x.png";
import supportPicDark1 from "/images/content/support-pic-dark-1.png";
import supportPicDark1x2 from "/images/content/support-pic-dark-1@2x.png";

import supportPic2 from "/images/content/support-pic-2.png";
import supportPic2x2 from "/images/content/support-pic-2@2x.png";
import supportPicDark2 from "/images/content/support-pic-dark-2.png";
import supportPicDark2x2 from "/images/content/support-pic-dark-2@2x.png";

import supportPic3 from "/images/content/support-pic-3.png";
import supportPic3x2 from "/images/content/support-pic-3@2x.png";
import supportPicDark3 from "/images/content/support-pic-dark-3.png";
import supportPicDark3x2 from "/images/content/support-pic-dark-3@2x.png";

import supportPic4 from "/images/content/support-pic-4.png";
import supportPic4x2 from "/images/content/support-pic-4@2x.png";
import supportPicDark4 from "/images/content/support-pic-dark-4.png";
import supportPicDark4x2 from "/images/content/support-pic-dark-4@2x.png";

const gallery = [
  {
    src: supportPic1,
    srcSet: supportPic1x2,
    srcDark: supportPicDark1,
    srcSetDark: supportPicDark1x2,
  },
  {
    src: supportPic2,
    srcSet: supportPic2x2,
    srcDark: supportPicDark2,
    srcSetDark: supportPicDark2x2,
  },
  {
    src: supportPic3,
    srcSet: supportPic3x2,
    srcDark: supportPicDark3,
    srcSetDark: supportPicDark3x2,
  },
  {
    src: supportPic4,
    srcSet: supportPic4x2,
    srcDark: supportPicDark4,
    srcSetDark: supportPicDark4x2,
  },
];

const Main = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          {gallery.map((x, index) => (
            <div className={styles.preview} key={index}>
              <Image
                srcSet={`${x.srcSet} 2x`}
                srcSetDark={`${x.srcSetDark} 2x`}
                src={x.src}
                srcDark={x.srcDark}
                alt="Support"
              />
            </div>
          ))}
        </div>
        <h1 className={cn("hero", styles.title)}>Support</h1>
        <div className={styles.info}>
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </div>
        <Form
          className={styles.form}
          big
          value={search}
          setValue={setSearch}
          onSubmit={() => handleSubmit()}
          placeholder="Search anything"
          type="text"
          name="search"
          icon="search"
        />
      </div>
    </div>
  );
};

export default Main;
