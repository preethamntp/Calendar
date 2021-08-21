import React from "react";
import { WeekdayIndicatorElement } from "./calenderElements";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WeekdayIndicator = () => {
  const weekdayIcons = weekdays.map((day, key) => {
    return (
      <div key={key}>
        {day}
      </div>
    );
  });
  return <WeekdayIndicatorElement>{weekdayIcons} </WeekdayIndicatorElement>;
};
export default WeekdayIndicator;
