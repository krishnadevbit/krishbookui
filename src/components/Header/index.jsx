import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link, NavLink } from "react-router-dom";
import Image from "../Image";
import Dropdown from "./Dropdown";
import Language from "./Language";
import Notification from "./Notification";
import User from "./User";
import Icon from "../Icon";
import Modal from "../Modal";
import Login from "../Login";
import Theme from "../Theme";
import logodark from "/images/logo-dark.svg";
import logoLight from "/images/logo-light.svg";

const travelers = [
  {
    title: "Stays",
    url: "/krishbookui/",
    icon: "comment",
  },
  {
    title: "Flights",
    url: "/krishbookui/flights",
    icon: "email",
  },
  {
    title: "Things to do",
    url: "/krishbookui/things-to-do",
    icon: "home",
  },
  {
    title: "Cars",
    url: "/krishbookui/cars",
    icon: "email",
  },
];

const languages = [
  {
    title: "English",
    country: "United States",
    url: "/",
  },
  {
    title: "Vietnamese",
    country: "Vietnamese",
    url: "/",
  },
  {
    title: "Français",
    country: "Belgique",
    url: "/",
  },
  {
    title: "Français",
    country: "Canada",
    url: "/",
  },
];

const items = [
  {
    menu: [
      {
        title: "Messages",
        icon: "comment",
        url: "/krishbookui/messages",
      },
      {
        title: "Bookings",
        icon: "home",
        url: "/krishbookui/bookings",
      },
      {
        title: "Wishlists",
        icon: "email",
        url: "/krishbookui/wishlists",
      },
    ],
  },
  {
    menu: [
      {
        title: "List your property",
        icon: "building",
        url: "/krishbookui/list-your-property",
      },
      {
        title: "Host an experience",
        icon: "flag",
        url: "/krishbookui/your-trips",
      },
    ],
  },
];

const Header = ({ separatorHeader, wide, notAuthorized }) => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={cn(
          styles.header,
          { [styles.headerBorder]: separatorHeader },
          { [styles.wide]: wide }
        )}
      >
        <div className={cn("container", styles.container)}>
          <Link className={styles.logo} to="/krishbookui">
            <Image
              className={styles.pic}
              src={logodark}
              srcDark={logoLight}
              alt="KRISHBOOK"
            />
          </Link>
          <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
            <Dropdown
              className={styles.dropdown}
              items={travelers}
              setValue={setVisibleNav}
            />
            <div className={styles.box}>
              <Icon name="bulb" size="25" />
              <Theme className={styles.theme} />
            </div>
            <NavLink
              className={({ isActive }) =>
                cn(styles.link, { [styles.active]: isActive })
              }
              to="/krishbookui/support"
            >
              Support
            </NavLink>
            <Language className={styles.language} items={languages} />
            <NavLink
              className={({ isActive }) =>
                cn("button-stroke button-small", styles.button, {
                  [styles.active]: isActive,
                })
              }
              to="/krishbookui/list-your-property"
            >
              List your property
            </NavLink>
          </div>
          <Notification className={styles.notification} />
          {notAuthorized ? (
            <button className={styles.login} onClick={() => setVisible(true)}>
              <Icon name="user" size="24" />
            </button>
          ) : (
            <User className={styles.user} items={items} />
          )}
          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </div>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Login />
      </Modal>
    </>
  );
};

export default Header;
