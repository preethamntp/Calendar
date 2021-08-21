import React, { useState, useEffect } from "react";
import {
  getDayOfMonth,
  getMonthDayYear,
  getMonth,
  getYear
} from "./utils/moment-utils";
import { getDatesInMonthDisplay } from "./utils/date-utils";
import { IndicatorElement, DayIndicatorElement } from "./calenderElements";

const DateIndicator = ({ activeDates, selectDate, setSelectDate }) => {
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    console.log(dropDown);
  }, [dropDown]);

  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate)
  );

  const monthDates = datesInMonth.map((i, key) => {
    const selected =
      getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? "selected" : "";
    const active =
      activeDates && activeDates[getMonthDayYear(i.date)] ? "active" : "";

    const handleClick = () => {
      setDropDown(!dropDown);
    };

    return (
      <>
        <IndicatorElement
          selected={selected}
          active={active}
          dataActiveMonth={i.currentMonth}
          data-date={i.date.toString()}
          key={key}
          onClick={handleClick}
        >
          {getDayOfMonth(i.date)}
        </IndicatorElement>
      </>
    );
  });
  return (
    <>
      <DayIndicatorElement>{monthDates}</DayIndicatorElement>
    </>
  );
};
export default DateIndicator;
