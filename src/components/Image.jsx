import React from "react";
import { useDarkMode } from "../Hooks/useDarkMode";

const Image = ({ className, src, srcDark, srcSet, srcSetDark, alt }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <img
      className={className}
      srcSet={isDarkMode ? srcSetDark : srcSet}
      src={isDarkMode ? srcDark : src}
      alt={alt}
    />
  );
};

export default Image;
