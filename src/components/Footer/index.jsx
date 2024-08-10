import React, { useState } from "react";
import cn from "classnames";
import styles from "./Footer.module.sass";
import { Link } from "react-router-dom";
import Image from "../Image";
import Icon from "../Icon";
import Theme from "../Theme";
import Form from "../Form";
import { useDarkMode } from "../../Hooks/useDarkMode";

const items = [
  {
    title: "Stays",
    url: "/",
  },
  {
    title: "Flights",
    url: "/flights",
  },
  {
    title: "Support",
    url: "/support",
  },
  {
    title: "Cars",
    url: "/cars",
  },
  {
    title: "Things to do",
    url: "/things-to-do",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const { isDarkMode } = useDarkMode();

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image
                className={styles.pic}
                src="/images/logo-dark.svg"
                srcDark="/images/logo-light.svg"
                alt="KRISHBOOK"
              />
            </Link>
            <div className={styles.box}>
              <Icon name="bulb" size="25" />
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
              <Theme className={styles.theme} />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.menu}>
              {items.map((x, index) => (
                <Link className={styles.link} to={x.url} key={index}>
                  {x.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.info}>
              Join our community{" "}
              <span role="img" aria-label="fire">
                🔥
              </span>
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
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            Copyright © 2024 CodeConnects(Krishnadevbit) LLC. All rights
            reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
