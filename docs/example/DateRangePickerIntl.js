import React from 'react';
import DateRangePicker from '../../src';

const DateRangePickerIntl = props => (
  <div className="field only-date">
    <DateRangePicker
      format="YYYY-MM-DD"
      locale={{
        week: ['日', '一', '二', '三', '四', '五', '六'],
        ok: '确定',
        today: '今天',
        yesterday: '昨天',
        last7Days: '最近 7 天',
      }}
    />
  </div>
);

export default DateRangePickerIntl;
