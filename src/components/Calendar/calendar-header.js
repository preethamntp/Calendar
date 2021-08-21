import React from 'react';
import moment from 'moment';
import {CalendarHeaderElement} from './calenderElements';

const CalendarHeader = ({ selectDate }) => {
  return (
    <CalendarHeaderElement>
      <div className="left-container">
        <h1>{moment(selectDate).format('dddd')}</h1>
        <h1>{moment(selectDate).format('MMMM Do')}</h1>
      </div>
      <div className="right-container">
        <h3>{moment(selectDate).year()}</h3>
      </div>
    </CalendarHeaderElement>
  );
};
export default CalendarHeader;
