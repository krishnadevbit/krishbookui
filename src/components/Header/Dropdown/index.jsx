import React, { useState } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.sass";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import Icon from "../../Icon";

const Dropdown = ({ className, items, setValue }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (item) => {
    setVisible(false);
    setValue(item);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(className, styles.dropdown, { [styles.active]: visible })}
      >
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.text}>Travelers</div>
          <Icon name="arrow-down" size="24" />
        </button>
        {visible && (
          <div className={styles.body}>
            {items.map((item, index) => (
              <NavLink
                className={({ isActive }) => cn(styles.item)}
                key={index}
                to={item.url}
                onClick={() => handleClick(item)}
              >
                <Icon name={item.icon} size="24" />
                <div className={styles.text}>{item.title}</div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
