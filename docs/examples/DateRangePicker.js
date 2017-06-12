import React from 'react';
import moment from 'moment';
import DateRangePicker from '../../src';

export default React.createClass({
  getInitialState() {
    return {
      startDate: null,
      endDate: null
    }
  },

  render() {
    const { startDate, endDate } = this.state;
    const today = moment().startOf('day');

    const nextMaxDate = startDate ? moment(startDate).clone().add(10, 'd').toDate() : null;
    const nextMinDate = endDate ? moment(endDate).clone().subtract(10, 'd').toDate() : null;
    const maxDate = nextMaxDate > today.toDate() ? today.toDate() : nextMaxDate;
    const minDate = endDate ? nextMinDate : null;

    return (
      <div className="doc-example">
        <DateRangePicker
          defaultStartDate={startDate}
          defaultEndDate={endDate}
          startMinDate={minDate}
          startMaxDate={today.toDate()}
          endMaxDate={maxDate}
          onSelect={(date, type) => {
            this.setState({
              [`${type}Date`]: date
            });
          }}
          onChange={(startDate, endDate) => {
            this.setState({
              startDate,
              endDate
            });
          }}
          onClear={() => {
            this.setState({
              startDate: null,
              endDate: null
            });
          }}
          ranges={[
            { label: '最近一周', range: [moment().startOf('day').clone().subtract(7, 'd'), today] },
            { label: '最近 30 天', range: [moment().startOf('day').clone().subtract(30, 'd'), today] }
          ]}
          locale={{
            week: ['日', '一', '二', '三', '四', '五', '六'],
            startDate: '开始时间',
            endDate: '结束时间',
            defaultRanges: '预设',
            clearAll: '清空',
            apply: '确定',
            cancel: '取消'
          }}
        />
      </div>
    );
  }
});
