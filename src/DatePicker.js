import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import Calendar from './Calendar';
import { transitionEndDetect } from './utils/eventDetect';
import decorate from './utils/decorate';

const propTypes = {
  disabledDate: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  calendarDate: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  index: PropTypes.number,
  format: PropTypes.string,
  onSelect: PropTypes.func,
  onMouseMove: PropTypes.func,
  onChangeCalendarDate: PropTypes.func
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
  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) ||
      !_.isEqual(nextState, this.state) ||
      !moment(nextProps.value[0]).isSame(moment(nextProps.value[1]), 'date') ||
      !moment(nextProps.value[1]).isSame(moment(nextProps.value[1]), 'date');
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
  render() {
    const {
      format,
      value,
      index,
      calendarDate,
      onSelect,
      onMouseMove,
      disabledDate
    } = this.props;

    const { calendarState } = this.state;

    return (
      <Calendar
        disabledDate={disabledDate}
        format={format}
        value={value}
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
