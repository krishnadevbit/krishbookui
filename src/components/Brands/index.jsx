import React from "react";
import cn from "classnames";
import styles from "./Brands.module.sass";

// Named imports for images
import rotashow from "/images/content/rotashow.svg";
import waves from "/images/content/waves.png";
import velocity9 from "/images/content/velocity9.svg";
import travelers from "/images/content/travelers.png";
import goldlines from "/images/content/goldlines.svg";

// Array with imported images
const brands = [rotashow, waves, velocity9, travelers, goldlines, rotashow];

const Brands = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.list}>
            {brands.map((x, index) => (
              <div className={styles.item} key={index}>
                <img src={x} alt="Brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
