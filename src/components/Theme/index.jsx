import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import { useDarkMode } from "../../Hooks/useDarkMode";

const Theme = ({ className }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <label className={cn(className, styles.theme)}>
      <input
        className={styles.input}
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        aria-label="Toggle dark mode"
      />
      <span className={styles.inner}>
        <span className={styles.box}></span>
      </span>
    </label>
  );
};

export default Theme;
