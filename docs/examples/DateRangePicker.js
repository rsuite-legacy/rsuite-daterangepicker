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
    const today = moment().startOf('day').toDate();

    const nextMaxDate = startDate ? moment(startDate).clone().add(10, 'd').toDate() : null;
    const nextMinDate = endDate ? moment(endDate).clone().subtract(10, 'd').toDate() : null;
    const maxDate = nextMaxDate > today ? today : nextMaxDate;
    const minDate = endDate ? nextMinDate : null;


    return (
      <div className="doc-example">
        <DateRangePicker
          defaultStartDate={startDate}
          defaultEndDate={endDate}
          startMinDate={minDate}
          startMaxDate={today}
          endMaxDate={maxDate}
          placement="bottomRight"
          ranges={[
            { label: '最近一周', range: [moment().startOf('day').clone().subtract(7, 'd'), today] },
            { label: '最近 30 天', range: [moment().startOf('day').clone().subtract(30, 'd'), today] }
          ]}
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
          messages={{
            week: ['日', '一', '二', '三', '四', '五', '六']
          }}
        />
      </div>
    );
  }
});
