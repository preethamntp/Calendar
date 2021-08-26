import React, { useState, useEffect } from "react";
import moment from "moment";
import CalendarHeader from "./calendar-header";
import WeekdayIndicator from "./WeekdayIndicator";
import DateIndicator from "./DateIndicator";
import { MainContainer, Container } from "./calenderElements";

const CalendarComponent = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  const [incCount, setIncCount] = useState(0);
  const [decCount, setDecCount] = useState(0);

  useEffect(() => {
    // console.log(count);
  }, [selectDate, incCount, decCount]);

  const incrementCount = () => {
    setIncCount(incCount + 1);
    setSelectDate(moment().add(incCount, "years"));
  };

  const decrementCount = () => {
    setDecCount(decCount + 1);

    setSelectDate(moment().subtract(decCount, "years"));
  };

  return (
    <MainContainer>
      <Container>
        <CalendarHeader
          selectDate={selectDate}
          incrementYear={incrementCount}
          decrementYear={decrementCount}
        />
        <WeekdayIndicator />
        <DateIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
      </Container>
    </MainContainer>
  );
};

export default CalendarComponent;
