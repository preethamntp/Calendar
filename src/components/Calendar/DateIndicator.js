import React from "react";
import {
  getDayOfMonth,
  getMonthDayYear,
  getMonth,
  getYear
} from "./utils/moment-utils";
import { getDatesInMonthDisplay } from "./utils/date-utils";
import { IndicatorElement, DayIndicatorElement } from "./calenderElements";

const DateIndicator = ({ activeDates, selectDate, setSelectDate }) => {
  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate)
  );

  const monthDates = datesInMonth.map((i, key) => {
    const selected =
      getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? "selected" : "";
    const active =
      activeDates && activeDates[getMonthDayYear(i.date)] ? "active" : "";

    const changeDate = e => {
      setSelectDate(e.target.getAttribute("data-date"));
    };
    return (
      <>
        <IndicatorElement
          selected={selected}
          active={active}
          dataActiveMonth={i.currentMonth}
          data-date={i.date.toString()}
          key={key}
          onClick={changeDate}
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