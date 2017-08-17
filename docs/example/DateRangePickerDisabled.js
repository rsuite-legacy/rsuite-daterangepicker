import React from 'react';
import moment from 'moment';
import DateRangePicker from '../../src';

const DateRangePickerDefault = props => (
  <div className="field">

    <p>- 禁用组件: <code>disabled</code> </p>
    <DateRangePicker disabled />

    <p>- 禁用日期: <code>disabledDate</code></p>
    <DateRangePicker
      disabledDate={(date) => date.isAfter(moment())}
    />
  </div>
);

export default DateRangePickerDefault;

