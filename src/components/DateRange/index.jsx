import React, { useState } from "react";
import cn from "classnames";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateRange.module.sass";
import Icon from "../Icon";

const DateRange = ({
  className,
  icon,
  description,
  startDatePlaceholderText,
  endDatePlaceholderText,
  displayFormat,
  small,
  bodyDown,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const orientation = window.matchMedia("(max-width: 400px)").matches
    ? "vertical"
    : "horizontal";

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
        <div className={styles.list}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <Icon name={icon} size="24" />
            </div>
            {description && (
              <div className={styles.description}>{description}</div>
            )}
          </div>
          <div className={styles.box}>
            <div className={styles.icon}>
              <Icon name={icon} size="24" />
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
        <div className={styles.datePickerContainer}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText={startDatePlaceholderText}
            dateFormat={displayFormat}
            className={styles.datePicker}
            popperPlacement={bodyDown ? "bottom-end" : "top-end"}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText={endDatePlaceholderText}
            dateFormat={displayFormat}
            className={styles.datePicker}
            popperPlacement={bodyDown ? "bottom-end" : "top-end"}
          />
        </div>
      </div>
    </div>
  );
};

export default DateRange;
