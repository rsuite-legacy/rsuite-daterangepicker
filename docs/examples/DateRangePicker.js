import React from 'react';
import moment from 'moment';
import { Button } from 'rsuite';
import DateRangePicker from '../../src';


class DateRangePickerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };
  }

  render() {

    const { startDate, endDate } = this.state;
    const today = moment().startOf('day');
    const ranges = [
      { label: '最近一周', range: [moment().startOf('day').clone().subtract(7, 'd'), today] },
      { label: '最近 30 天', range: [moment().startOf('day').clone().subtract(30, 'd'), today] }
    ]
    const locale = {
      week: ['日', '一', '二', '三', '四', '五', '六'],
      startDate: '开始时间',
      endDate: '结束时间',
      defaultRanges: '预设',
      clearAll: '清空',
      apply: '确定',
      cancel: '取消'
    };

    return (
      <div className="doc-example">

        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onSelect={(date, type) => {
            console.log(date, type);
          }}
          onChange={(startDate, endDate) => {
            console.log(startDate, endDate);
          }}
          onClear={() => {
            this.setState({
              startDate: null,
              endDate: null
            });
          }}
          ranges={ranges}
          locale={locale}
        />
        <hr />
        <Button
          onClick={() => {
            this.setState({
              startDate: new Date(),
              endDate: new Date()
            });
          }}>
          Today
        </Button>
      </div>
    );
  }
}


export default DateRangePickerDemo;
