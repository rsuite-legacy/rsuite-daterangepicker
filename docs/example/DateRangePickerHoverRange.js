import React from 'react';
import moment from 'moment';
import DateRangePicker from '../../src';

const DateRangePickerHoverRange = props => (
  <div className="field">
    <DateRangePicker
      hoverRange="week"
    />
    <DateRangePicker
      hoverRange={date => [date.clone().subtract(1, 'days'), date.clone().add(1, 'days')]}
    />
  </div>
);

export default DateRangePickerHoverRange;

