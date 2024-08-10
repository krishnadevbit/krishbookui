import React, { useState } from "react";
import cn from "classnames";
import styles from "./DateSingle.module.sass";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "../Icon";

const DateSingle = ({
  className,
  icon,
  description,
  placeholder,
  displayFormat,
  small,
  bodyDown,
}) => {
  const [date, setDate] = useState(null);

  return (
    <div
      className={cn(
        className,
        { small: small },
        { bodyDown: bodyDown },
        { [styles.small]: small },
        styles.date
      )}
    >
      <div className={styles.head}>
        <div className={styles.box}>
          <div className={styles.icon}>
            <Icon name={icon} size="24" />
          </div>
          {description && (
            <div className={styles.description}>{description}</div>
          )}
        </div>
        <DatePicker
          placeholderText={placeholder}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={displayFormat}
          className={styles.datePicker}
          popperPlacement={bodyDown ? "bottom-end" : "top-end"}
          readOnly
        />
      </div>
    </div>
  );
};

export default DateSingle;
