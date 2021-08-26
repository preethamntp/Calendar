import React from "react";

import {
  getReadableMonthDate,
  getReadableWeekday,
  getYear
} from "./utils/moment-utils";

import { CalendarHeaderElement, YearContainer } from "./calenderElements";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const CalendarHeader = ({ selectDate, incrementYear, decrementYear }) => {
  return (
    <CalendarHeaderElement>
      <div className="left-container">
        <h1>{getReadableWeekday(selectDate)}</h1>
        <h1>{getReadableMonthDate(selectDate)}</h1>
      </div>
      <div className="right-container">
        <YearContainer>
          <ArrowLeftIcon className="arrowIcon" onClick={decrementYear} /> <h3>{getYear(selectDate)}</h3>{" "}
          <ArrowRightIcon className="arrowIcon" onClick={incrementYear} />
        </YearContainer>
      </div>
    </CalendarHeaderElement>
  );
};
export default CalendarHeader;
