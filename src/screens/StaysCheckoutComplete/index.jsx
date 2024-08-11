import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import cn from "classnames";
import styles from "./StaysCheckoutComplete.module.sass";
import Control from "../../components/Control";
import CheckoutSlider from "./CheckoutSlider";
import CheckoutComplete from "../../components/CheckoutComplete";

// Import images
import sliderPic from "/images/content/slider-pic-1.jpg";
import sliderPic2x from "/images/content/slider-pic-1@2x.jpg";

// Define breadcrumbs
const breadcrumbs = [
  {
    title: "Spectacular views of Queenstown",
    url: "/krishbookui/stays-product",
  },
  {
    title: "Confirm and pay",
    url: "/krishbookui/stays-checkout",
  },
  {
    title: "Checkout completed",
  },
];

// Define gallery items
const gallery = [
  {
    src: sliderPic,
    srcSet: sliderPic2x,
  },
  {
    src: sliderPic,
    srcSet: sliderPic2x,
  },
  {
    src: sliderPic,
    srcSet: sliderPic2x,
  },
];

// Define parameters
const parameters = [
  {
    title: "1 bedroom",
  },
  {
    title: "1 private bath",
  },
];

// Define options
const options = [
  {
    title: "Booking code:",
    content: "UI8_150989",
    icon: "hand-cart",
  },
  {
    title: "Date:",
    content: "30 Apr, 2021",
    icon: "calendar",
  },
  {
    title: "Total:",
    content: "$833",
    icon: "receipt",
  },
  {
    title: "Payment method:",
    content: "Credit card",
    icon: "wallet",
  },
];

// Define items
const items = [
  {
    title: "Dates",
    content: "May 15 - 22, 2021",
  },
  {
    title: "Guests",
    content: "2 guests",
  },
];

// Define the component
const StaysCheckoutComplete = () => {
  return (
    <div className={cn("section-mb80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Control
          className={styles.control}
          urlHome="/"
          breadcrumbs={breadcrumbs}
        />
        <div className={styles.row}>
          <div className={styles.col}>
            <CheckoutSlider className={styles.slider} gallery={gallery} />
          </div>
          <div className={styles.col}>
            <CheckoutComplete
              className={styles.complete}
              title="Spectacular views of Queenstown"
              parameters={parameters}
              options={options}
              items={items}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types
StaysCheckoutComplete.propTypes = {
  className: PropTypes.string,
};

export default StaysCheckoutComplete;
