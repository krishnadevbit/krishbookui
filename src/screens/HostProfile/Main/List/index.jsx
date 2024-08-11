import React, { useState } from "react";
import cn from "classnames";
import styles from "./List.module.sass";
import Card from "../../../../components/Card";
import Icon from "../../../../components/Icon";
import Slider from "react-slick";

// Import images
import cardPic1 from "/images/content/card-pic-1.jpg";
import cardPic1x2 from "/images/content/card-pic-1@2x.jpg";
import cardPic2 from "/images/content/card-pic-2.jpg";
import cardPic2x2 from "/images/content/card-pic-2@2x.jpg";
import cardPic3 from "/images/content/card-pic-3.jpg";
import cardPic3x2 from "/images/content/card-pic-3@2x.jpg";
import cardPic4 from "/images/content/card-pic-4.jpg";
import cardPic4x2 from "/images/content/card-pic-4@2x.jpg";

const locations = [
  {
    title: "Stays",
    list: [
      {
        title: "Entire serviced classy mountain house",
        priceOld: "$356",
        priceActual: "$267",
        categoryText: "superhost",
        rating: "4.8",
        reviews: "12",
        cost: "$200 total",
        src: cardPic1,
        srcSet: cardPic1x2,
        url: "/krishbookui/stays-product",
        options: [
          {
            title: "Free wifi",
            icon: "modem",
          },
          {
            title: "Breakfast included",
            icon: "burger",
          },
        ],
      },
      {
        title: "Entire serviced classy mountain house",
        priceOld: "$245",
        priceActual: "$167",
        categoryText: "superhost",
        rating: "4.9",
        reviews: "24",
        cost: "$100 total",
        src: cardPic2,
        srcSet: cardPic2x2,
        url: "/krishbookui/stays-product",
        options: [
          {
            title: "Free wifi",
            icon: "modem",
          },
          {
            title: "Breakfast included",
            icon: "burger",
          },
        ],
      },
      {
        title: "Entire serviced classy mountain house",
        priceOld: "$356",
        priceActual: "$267",
        categoryText: "superhost",
        rating: "5.0",
        reviews: "102",
        cost: "$333 total",
        src: cardPic3,
        srcSet: cardPic3x2,
        url: "/krishbookui/stays-product",
        options: [
          {
            title: "Free wifi",
            icon: "modem",
          },
          {
            title: "Breakfast included",
            icon: "burger",
          },
        ],
      },
      {
        title: "Entire serviced classy mountain house",
        priceOld: "$156",
        priceActual: "$267",
        categoryText: "superhost",
        rating: "4.5",
        reviews: "5",
        cost: "$230 total",
        src: cardPic4,
        srcSet: cardPic4x2,
        url: "/krishbookui/stays-product",
        options: [
          {
            title: "Free wifi",
            icon: "modem",
          },
          {
            title: "Breakfast included",
            icon: "burger",
          },
        ],
      },
    ],
  },
  {
    title: "Experiences",
    list: [
      {
        title: "Entire serviced classy mountain house",
        priceOld: "$245",
        priceActual: "$167",
        categoryText: "superhost",
        rating: "4.9",
        reviews: "24",
        cost: "$100 total",
        src: cardPic2,
        srcSet: cardPic2x2,
        url: "/krishbookui/stays-product",
        options: [
          {
            title: "Free wifi",
            icon: "modem",
          },
          {
            title: "Breakfast included",
            icon: "burger",
          },
        ],
      },
      {
        title: "Entire serviced classy mountain house",
        priceOld: "$356",
        priceActual: "$267",
        categoryText: "superhost",
        rating: "5.0",
        reviews: "102",
        cost: "$333 total",
        src: cardPic3,
        srcSet: cardPic3x2,
        url: "/krishbookui/stays-product",
        options: [
          {
            title: "Free wifi",
            icon: "modem",
          },
          {
            title: "Breakfast included",
            icon: "burger",
          },
        ],
      },
      {
        title: "Entire serviced classy mountain house",
        priceOld: "$156",
        priceActual: "$267",
        categoryText: "superhost",
        rating: "4.5",
        reviews: "5",
        cost: "$230 total",
        src: cardPic4,
        srcSet: cardPic4x2,
        url: "/krishbookui/stays-product",
        options: [
          {
            title: "Free wifi",
            icon: "modem",
          },
          {
            title: "Breakfast included",
            icon: "burger",
          },
        ],
      },
    ],
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const List = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
  };

  return (
    <div className={cn(className, styles.list)}>
      <div className={styles.title}>Zoe Towne’s listing</div>
      <div className={styles.nav}>
        {locations.map((x, index) => (
          <button
            className={cn(styles.link, {
              [styles.active]: index === activeIndex,
            })}
            onClick={() => setActiveIndex(index)}
            key={index}
          >
            {x.title}
          </button>
        ))}
      </div>
      <div className={styles.wrapper}>
        <Slider className="profile-slider" {...settings}>
          {locations[activeIndex].list.map((x, index) => (
            <Card className={styles.card} item={x} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default List;
