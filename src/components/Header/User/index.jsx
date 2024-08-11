import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";
import av2 from "/images/content/avatar-2.jpg";

const User = ({ className, items }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className, { [styles.active]: visible })}>
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          <img src={av2} alt="Avatar" />
        </button>
        <div className={styles.body}>
          <div className={styles.group}>
            {items.map((item, index) => (
              <div className={styles.menu} key={index}>
                {item.menu.map((x, subIndex) => (
                  <NavLink
                    className={({ isActive }) =>
                      cn(styles.item, { [styles.active]: isActive })
                    }
                    to={x.url}
                    onClick={() => setVisible(!visible)}
                    key={subIndex}
                  >
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="24" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.btns}>
            <NavLink
              className={({ isActive }) =>
                cn("button button-small", styles.button, {
                  [styles.active]: isActive,
                })
              }
              to="/krishbookui/account-settings"
              onClick={() => setVisible(!visible)}
            >
              Account
            </NavLink>
            <button
              className={cn("button-stroke button-small", styles.button)}
              onClick={() => setVisible(false)}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default User;
