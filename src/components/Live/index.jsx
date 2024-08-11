import React from "react";
import cn from "classnames";
import styles from "./Live.module.sass";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Icon from "../Icon";
import Loader from "../Loader";
import liv1 from "/images/content/live-pic-1.png";
import liv1x from "/images/content/live-pic-1@2x.png";
import liv2 from "/images/content/live-pic-2.png";
import liv2x from "/images/content/live-pic-2@2x.png";
import liv3 from "/images/content/live-pic-3.png";
import liv3x from "/images/content/live-pic-3@2x.png";

const items = [
  {
    title: "Enjoy the great cold",
    content: "6,879 properties",
    src: liv1,
    srcSet: liv1x,
    url: "/krishbookui/stays-category",
  },
  {
    title: "Pick up the earliest sunrise",
    content: "9,849 properties",
    src: liv2,
    srcSet: liv2x,
    url: "/krishbookui/stays-category",
  },
  {
    title: "Unique stay",
    content: "12,879 properties",
    src: liv3,
    srcSet: liv3x,
    url: "/krishbookui/stays-category",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Live = ({ title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          nextArrow: (
            <SlickArrow>
              <Icon name="arrow-next" size="14" />
            </SlickArrow>
          ),
          prevArrow: (
            <SlickArrow>
              <Icon name="arrow-prev" size="14" />
            </SlickArrow>
          ),
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 1,
          nextArrow: (
            <SlickArrow>
              <Icon name="arrow-next" size="14" />
            </SlickArrow>
          ),
          prevArrow: (
            <SlickArrow>
              <Icon name="arrow-prev" size="14" />
            </SlickArrow>
          ),
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>{title}</h2>
          <div className={cn("info", styles.info)}>Keep calm & travel on</div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="live-slider" {...settings}>
            {items.map((x, index) => (
              <Link className={styles.item} key={index} to={x.url}>
                <div className={styles.preview}>
                  <img srcSet={`${x.srcSet} 2x`} src={x.src} alt="Live" />
                </div>
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.text}>{x.content}</div>
              </Link>
            ))}
          </Slider>
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            <Loader className={styles.loader} />
            <span>Load more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Live;
