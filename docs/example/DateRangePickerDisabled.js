import React from 'react';
import moment from 'moment';
import DateRangePicker from '../../src';

const DateRangePickerDefault = props => (
  <div className="field">
    <p>- 禁用日期: <code>disabledDate</code></p>
    <DateRangePicker
      defaultValue={[moment(), moment().add(10, 'd')]}
      disabledDate={(date) => date.isAfter(moment())}
    />
  </div>
);

export default DateRangePickerDefault;

