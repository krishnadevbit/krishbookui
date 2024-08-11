import React from "react";
import cn from "classnames";
import styles from "./FullPhoto.module.sass";
import Product from "../../components/Product";
import Icon from "../../components/Icon";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

// Import images
import photo21 from "/images/content/photo-2.1.jpg";
import photo22 from "/images/content/photo-2.2.jpg";
import photo26 from "/images/content/photo-2.6.jpg";
import photo23 from "/images/content/photo-2.3.jpg";
import photo27 from "/images/content/photo-2.7.jpg";
import photo24 from "/images/content/photo-2.4.jpg";
import photo28 from "/images/content/photo-2.8.jpg";
import photo25 from "/images/content/photo-2.5.jpg";
import photo29 from "/images/content/photo-2.9.jpg";

const breakpointCols = {
  default: 2,
  768: 1,
};

const breadcrumbs = [
  {
    title: "Home",
    url: "/krishbookui/",
  },
  {
    title: "Stays",
    url: "/krishbookui/",
  },
  {
    title: "New Zealand",
    url: "/krishbookui/stays-category",
  },
  {
    title: "South Island",
  },
];

const gallery = [
  photo21,
  photo22,
  photo26,
  photo23,
  photo27,
  photo24,
  photo28,
  photo25,
  photo29,
];

const options = [
  {
    title: "Superhost",
    icon: "home",
  },
  {
    title: "Queenstown, Otago, New Zealand",
    icon: "flag",
  },
];

const FullPhoto = () => {
  return (
    <>
      <Product
        classSection="section-mb64"
        urlHome="/"
        title="Spectacular views of Queenstown"
        breadcrumbs={breadcrumbs}
        options={options}
      ></Product>
      <div className={cn("section-mb80", styles.section)}>
        <div className={cn("container", styles.container)}>
          {gallery.map(
            (x, index) =>
              index === 0 && (
                <div className={styles.preview} key={index}>
                  <img src={x} alt="Nature" />
                </div>
              )
          )}
          <div className={styles.inner}>
            <Masonry
              className={styles.grid}
              columnClassName={styles.column}
              breakpointCols={breakpointCols}
            >
              {gallery.map(
                (x, index) =>
                  index > 0 && (
                    <div className={styles.preview} key={index}>
                      <img src={x} alt="Nature" />
                    </div>
                  )
              )}
            </Masonry>
          </div>
          <div className={styles.foot}>
            <Link
              to="/krishbookui/stays-product"
              className={cn("button-circle-stroke button-small", styles.button)}
            >
              <Icon name="close" size="24" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPhoto;
