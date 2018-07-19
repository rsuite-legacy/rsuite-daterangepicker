import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from './Calendar';
import decorate from './utils/decorate';

const propTypes = {
  disabledDate: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  hoverValue: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  calendarDate: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  index: PropTypes.number,
  format: PropTypes.string,
  onSelect: PropTypes.func,
  onMouseMove: PropTypes.func,
  onChangeCalendarDate: PropTypes.func,
  isoWeek: PropTypes.bool
};

const defaultProps = {
  value: [],
  calendarDate: [moment(), moment().add(1, 'month')],
  format: 'YYYY-MM-DD',
  index: 0
};

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarState: null
    };
  }

  onMoveForword = (nextPageDate) => {
    const { onChangeCalendarDate, index } = this.props;
    onChangeCalendarDate(index, nextPageDate);
  }

  onMoveBackward = (nextPageDate) => {
    const { onChangeCalendarDate, index } = this.props;
    onChangeCalendarDate(index, nextPageDate);
  }

  handleChangePageDate = (nextPageDate) => {
    const { onChangeCalendarDate, index } = this.props;
    onChangeCalendarDate(index, nextPageDate);
    this.setState({
      calendarState: null
    });
  }

  showMonthDropdown(callback) {
    this.setState({ calendarState: 'DROP_MONTH' }, typeof callback === 'function' ? callback : undefined);
  }

  hideMonthDropdown(callback) {
    this.setState({ calendarState: null }, typeof callback === 'function' ? callback : undefined);
  }

  toggleMonthDropdown = (callback) => {
    const { calendarState } = this.state;

    if (calendarState === 'DROP_MONTH') {
      this.hideMonthDropdown(callback);
    } else {
      this.showMonthDropdown(callback);
    }
  }
  render() {
    const {
      format,
      value,
      hoverValue,
      index,
      calendarDate,
      onSelect,
      onMouseMove,
      disabledDate,
      isoWeek
    } = this.props;

    const { calendarState } = this.state;

    return (
      <Calendar
        disabledDate={disabledDate}
        format={format}
        value={value}
        isoWeek={isoWeek}
        hoverValue={hoverValue}
        calendarState={calendarState}
        calendarDate={calendarDate}
        index={index}
        onMoveForword={this.onMoveForword}
        onMoveBackward={this.onMoveBackward}
        onSelect={onSelect}
        onMouseMove={onMouseMove}
        onToggleMonthDropdown={this.toggleMonthDropdown}
        onChangePageDate={this.handleChangePageDate}
        onChangePageTime={this.handleChangePageTime}
        calendarRef={(ref) => {
          this.calendar = ref;
        }}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default decorate()(DatePicker);
