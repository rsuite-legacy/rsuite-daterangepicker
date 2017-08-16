import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import Calendar from './Calendar';
import { transitionEndDetect } from './utils/eventDetect';
import calendarPropTypes from './calendarPropTypes';
import decorate from './utils/decorate';
import Toolbar from './Toolbar';

const propTypes = {
  ...calendarPropTypes,
  ranges: Toolbar.propTypes.ranges,
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  calendarDate: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  index: PropTypes.number,
  format: PropTypes.string,
  onSelect: PropTypes.func,
  onChangeCalendarDate: PropTypes.func
};

const defaultProps = {
  value: [],
  calendarDate: [],
  format: 'YYYY-MM-DD',
  index: 0
};

class DatePicker extends Component {
  constructor(props) {
    super(props);
    const ret = transitionEndDetect();
    this.state = {
      calendarState: null,
      transitionSupport: ret
    };
  }

  componentDidMount() {
    const { transitionSupport } = this.state;
    if (transitionSupport.supported && this.calendar) {
      this.calendar.addEventListener(transitionSupport.event, (e) => {
        if (e.target.className === 'month-view-weeks-wrapper' && e.propertyName === 'left') {
          this.onMoveDone();
        }
      });
    }
  }

  onMoveForword = () => {
    this.setState({
      calendarState: 'SLIDING_L'
    });
  }

  onMoveBackward = () => {
    this.setState({
      calendarState: 'SLIDING_R'
    });
  }

  onMoveDone() {
    const { calendarState } = this.state;
    const { onChangeCalendarDate, calendarDate, index } = this.props;
    let pageChanges = 0;

    if (calendarState === 'SLIDING_L') {
      pageChanges = 1;
    }
    if (calendarState === 'SLIDING_R') {
      pageChanges = -1;
    }

    calendarDate[index].add(pageChanges, 'month');

    this.setState({
      calendarState: null
    });

    onChangeCalendarDate(index, calendarDate[index]);
  }

  handleChangePageDate = (nextPageDate) => {
    const { onChangeCalendarDate, index } = this.props;
    onChangeCalendarDate(index, nextPageDate);
    this.setState({
      calendarState: null
    });
  }

  handleShortcutPageDate = (pageDate, unclosed) => {
    const { onSelect } = this.props;
    this.updateValue(pageDate, unclosed);
    onSelect && onSelect(pageDate);
  }

  showMonthDropdown() {
    this.setState({ calendarState: 'DROP_MONTH' });
  }

  hideMonthDropdown() {
    this.setState({ calendarState: null });
  }

  toggleMonthDropdown = () => {
    const { calendarState } = this.state;

    if (calendarState === 'DROP_MONTH') {
      this.hideMonthDropdown();
    } else {
      this.showMonthDropdown();
    }
  }

  handleSelect = (nextValue) => {

    const { onSelect, index } = this.props;

    if (index === 0) {
      nextValue.hours(0).minutes(0).seconds(0);
    } else {
      nextValue.hours(23).minutes(59).seconds(59);
    }

    this.setState({
      pageDate: nextValue
    });

    onSelect && onSelect(nextValue);
  }

  render() {
    const {
      format,
      value,
      index,
      calendarDate
    } = this.props;

    const { calendarState } = this.state;
    const calendarProps = _.pick(this.props, Object.keys(calendarPropTypes));

    return (
      <Calendar
        {...calendarProps}
        format={format}
        value={value}
        calendarState={calendarState}
        calendarDate={calendarDate}
        index={index}
        onMoveForword={this.onMoveForword}
        onMoveBackward={this.onMoveBackward}
        onSelect={this.handleSelect}
        onMouseMove={(date) => {
          //console.log(date.format('YYYY-MM-DD'));
        }}
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
