import React from 'react';
import DateRangePicker from '../../src';
import moment from 'moment';

class DateRangePickerValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }
  render() {
    return (
      <div className="field">
        <DateRangePicker defaultValue={[]} />
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

