import React, { useState } from "react";
import moment from "moment";
import CalendarHeader from "./calendar-header";
import WeekdayIndicator from "./WeekdayIndicator";
import DateIndicator from "./DateIndicator";
import { MainContainer, Container } from "./calenderElements";

const CalendarComponent = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  return (
    <MainContainer>
      <Container>
        <CalendarHeader selectDate={selectDate} />
        <WeekdayIndicator />
        <DateIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
      </Container>
    </MainContainer>
  );
};

export default CalendarComponent;
