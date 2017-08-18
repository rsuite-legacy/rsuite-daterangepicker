import React from 'react';
import DateRangePicker from '../../src';
import moment from 'moment';

class DateRangePickerValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [moment('2017-02-01'), moment('2017-05-20')]
    };
  }
  render() {
    return (
      <div className="field">
        <DateRangePicker defaultValue={[moment('2017-02-01'), moment('2017-05-20')]} />
        <DateRangePicker
          value={this.state.value}
          onChange={(value) => {
            this.setState({ value });
          }}
        />
      </div>
    );
  }
}

export default DateRangePickerValue;

