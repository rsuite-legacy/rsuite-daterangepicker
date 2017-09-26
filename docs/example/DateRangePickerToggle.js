import React from 'react';
import { Button, ButtonToolbar } from 'rsuite';
import DateRangePicker from '../../src';


class DateRangePickerToggle extends React.Component {

  render() {
    return (
      <div className="field">
        <ButtonToolbar style={{ marginBottom: 10 }}>
          <Button
            shape="default"
            onClick={() => {
              this.picker.show(true);
            }}
          >
            展开
          </Button>
          <Button
            shape="default"
            onClick={() => {
              this.picker.hide(true);
            }}
          >
            关闭
          </Button>
        </ButtonToolbar>

        <DateRangePicker
          ref={ref => this.picker = ref}
        />

      </div>
    );
  }
}

export default DateRangePickerToggle;

