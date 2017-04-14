import React from 'react';
import moment from 'moment';
import DateRangePicker from '../../src';

export default () => {
  const today = moment().startOf('day');
  const yesterday = today.clone().subtract(1, 'd');
  return (
    <div className="doc-example">
      <DateRangePicker
        defaultEndDate={new Date}
        defaultStateDate={new Date}
        placement="bottomRight"
        ranges={[
          { label: '最近一周', range: [yesterday.clone().subtract(7, 'd'), yesterday] },
          { label: '最近 30 天', range: [yesterday.clone().subtract(30, 'd'), yesterday] }
        ]}
        onChange={(beginDate, endDate) => {
          console.log(beginDate, endDate);
        }}
        messages={{
          week: ['日', '一', '二', '三', '四', '五', '六']
        }}
      />
    </div>
  );
};
