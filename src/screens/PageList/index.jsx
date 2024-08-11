import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./PageList.module.sass";

const PageList = () => {
  return (
    <div className={styles.page}>
      <div className={cn("container", styles.container)}>
        <p>
          <Link to="/krishbookui">Stays</Link>
        </p>
        <p>
          <Link to="/krishbookui/stays-category">Stays Category</Link>
        </p>
        <p>
          <Link to="/krishbookui/stays-product">Stays Product Details</Link>
        </p>
        <p>
          <Link to="/krishbookui/stays-checkout">Stays Checkout</Link>
        </p>
        <p>
          <Link to="/krishbookui/stays-checkout-complete">
            Stays Checkout Complete
          </Link>
        </p>
        <p>
          <Link to="/krishbookui/full-photo">Full Photo Grid</Link>
        </p>
        <p style={{ marginTop: 40 }}>
          <Link to="/krishbookui/flights">Flights</Link>
        </p>
        <p>
          <Link to="/krishbookui/flights-category">Flights category</Link>
        </p>
        <p style={{ marginTop: 40 }}>
          <Link to="/krishbookui/things-to-do">Things to do</Link>
        </p>
        <p>
          <Link to="/krishbookui/category">Category</Link>
        </p>
        <p>
          <Link to="/krishbookui/product">Product</Link>
        </p>
        <p>
          <Link to="/krishbookui/checkout">Checkout</Link>
        </p>
        <p>
          <Link to="/krishbookui/checkout-complete">Checkout Complete</Link>
        </p>
        <p style={{ marginTop: 40 }}>
          <Link to="/krishbookui/cars">Cars</Link>
        </p>
        <p>
          <Link to="/krishbookui/cars-category">Cars category</Link>
        </p>
        <p>
          <Link to="/krishbookui/cars-category-2">Cars category 2</Link>
        </p>
        <p>
          <Link to="/krishbookui/cars-product">Cars Product Details</Link>
        </p>
        <p>
          <Link to="/krishbookui/cars-checkout">Cars Checkout</Link>
        </p>
        <p>
          <Link to="/krishbookui/cars-checkout-complete">
            Cars Checkout Complete
          </Link>
        </p>
        <p style={{ marginTop: 40 }}>
          <Link to="/krishbookui/support">Support</Link>
        </p>
        <p>
          <Link to="/krishbookui/host-profile">Host profile</Link>
        </p>
        <p>
          <Link to="/krishbookui/profile">User profile</Link>
        </p>
        <p>
          <Link to="/krishbookui/account-settings">Account Settings</Link>
        </p>
        <p>
          <Link to="/krishbookui/messages">Message Center</Link>
        </p>
        <p>
          <Link to="/krishbookui/wishlists">Wishlists</Link>
        </p>
        <p>
          <Link to="/krishbookui/your-trips">Your Trips</Link>
        </p>
        <p>
          <Link to="/krishbookui/bookings">Bookings</Link>
        </p>
        <p>
          <Link to="/krishbookui/list-your-property">List your property</Link>
        </p>
      </div>
    </div>
  );
};

export default PageList;
