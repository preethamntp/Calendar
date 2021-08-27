import React, { useState, useCallback } from "react";
import {
  getDayOfMonth,
  getMonthDayYear,
  getMonth,
  getYear
} from "./utils/moment-utils";
import moment from "moment";
import { getDatesInMonthDisplay } from "./utils/date-utils";
import {
  IndicatorElement,
  DayIndicatorElement,
  Section
} from "./calenderElements";

import FormController from "../FormController";

const DateIndicator = ({ activeDates, selectDate, setSelectDate }) => {
  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate)
  );

  const [isToggled, setIsToggled] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const toggle = useCallback(() => setIsToggled(!isToggled), [
    isToggled,
    setIsToggled
  ]);

  const monthDates = datesInMonth.map((i, key) => {
    const selected =
      getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? "selected" : "";
    const active =
      activeDates && activeDates[getMonthDayYear(i.date)] ? "active" : "";

    const changeDate = (e, date) => {
      setSelectDate(e.target.getAttribute("data-date"));
      handleForm(e, date);
    };

    const handleForm = (e, date) => {
      console.log(moment(date).format("LL"));
      setSelectedDate(moment(e.target.getAttribute("data-date")).format("LLLL"));
      toggle();
    };

    return (
      <>
        <IndicatorElement
          selected={selected}
          active={active}
          dataActiveMonth={i.currentMonth}
          data-date={i.date.toString()}
          key={key}
          onClick={e => changeDate(e, i.date)}
        >
          <>
            <Section
              dataActiveMonth={i.currentMonth}
              data-date={i.date.toString()}
              key={key}
            >
              {getDayOfMonth(i.date)}
            </Section>
          </>
        </IndicatorElement>
      </>
    );
  });
  return (
    <>
      <DayIndicatorElement>{monthDates}</DayIndicatorElement>
      {isToggled ? (
        <FormController openProps={isToggled} selectedDate={selectedDate} />
      ) : null}
    </>
  );
};
export default DateIndicator;
