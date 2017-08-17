import React from 'react';
import moment from 'moment';
import DateRangePicker from '../../src';

const DateRangePickerDefault = props => (
  <div className="field">
    <DateRangePicker format="YYYY-MM-DD" />
    <DateRangePicker defaultValue={[moment(), moment().add(5, 'd')]} />
  </div>
);

export default DateRangePickerDefault;

