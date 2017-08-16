import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import _ from 'lodash';
import MonthDropdown from './MonthDropdown';
import TimeDropdown from './TimeDropdown';
import MonthView from './MonthView';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';
import calendarPropTypes from '../calendarPropTypes';
import decorate from '../utils/decorate';

const propTypes = {
  ...calendarPropTypes,
  calendarState: PropTypes.string,
  index: PropTypes.number,
  calendarDate: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  onMoveForword: PropTypes.func,
  onMoveBackward: PropTypes.func,
  onSelect: PropTypes.func,
  onMouseMove: PropTypes.func,
  onToggleMonthDropdown: PropTypes.func,
  onToggleTimeDropdown: PropTypes.func,
  onChangePageDate: PropTypes.func,
  onChangePageTime: PropTypes.func,
  calendarRef: PropTypes.func,
  format: PropTypes.string
};


class Calendar extends React.Component {

  disabledDate = (date) => {
    const { disabledDate } = this.props;
    if (disabledDate && disabledDate(date)) {
      return true;
    }
    return false;
  }
  disabledTime = (date) => {

    if (!date) {
      return false;
    }

    const calendarProps = _.pick(this.props, Object.keys(calendarPropTypes));
    return Object.keys(calendarProps).some((key) => {
      if (/(Hours)/.test(key)) {
        return calendarProps[key](date.hours(), date);
      }
      if (/(Minutes)/.test(key)) {
        return calendarProps[key](date.minutes(), date);
      }
      if (/(Seconds)/.test(key)) {
        return calendarProps[key](date.seconds(), date);
      }
      return false;
    });
  };

  shouldMountTime(props) {
    const { format } = props || this.props;
    return /(H|h|m|s)/.test(format);
  }

  shouldMountMonth(props) {
    const { format } = props || this.props;
    return /Y/.test(format) && /M/.test(format);
  }

  shouldMountDate(props) {
    const { format } = props || this.props;
    return /Y/.test(format) && /M/.test(format) && /D/.test(format);
  }

  handleMoveForword = () => {
    const { onMoveForword } = this.props;
    onMoveForword && onMoveForword(this.getPageDate());
  }

  handleMoveBackward = () => {
    const { onMoveBackward } = this.props;
    onMoveBackward && onMoveBackward(this.getPageDate());
  }

  disabledBackward = () => {
    const { calendarDate, index } = this.props;
    const isAfter = calendarDate[1].isAfter(calendarDate[0].clone().add(1, 'month'), 'month');

    if (index === 0) {
      return false;
    }

    if (!isAfter) {
      return true;
    }

    return false;
  }

  disabledForword = () => {
    const { calendarDate, index } = this.props;
    const isAfter = calendarDate[1].isAfter(calendarDate[0].clone().add(1, 'month'), 'month');

    if (index === 1) {
      return false;
    }

    if (!isAfter) {
      return true;
    }

    return false;
  }

  disabledMonth = (date) => {
    const { calendarDate, index } = this.props;
    let isAfter = true;

    if (index === 1) {
      isAfter = date.isAfter(calendarDate[0].clone().add(1, 'month'), 'month');
      return !isAfter;
    }

    isAfter = calendarDate[1].isAfter(date.clone().add(1, 'month'), 'month');
    return !isAfter;
  }

  getPageDate() {
    const { calendarDate, index } = this.props;
    return calendarDate[index];
  }

  render() {

    const {
      calendarState,
      calendarDate,
      onSelect,
      onMouseMove,
      onToggleMonthDropdown,
      onToggleTimeDropdown,
      onChangePageDate,
      onChangePageTime,
      inline,
      format,
      calendarRef,
      className,
      value,
      ...props
    } = this.props;

    const pageDate = this.getPageDate();


    const showDate = this.shouldMountDate();
    const showTime = this.shouldMountTime();
    const showMonth = this.shouldMountMonth();

    const onlyShowTime = showTime && !showDate && !showMonth;
    const onlyShowMonth = showMonth && !showDate && !showTime;
    const dropTime = calendarState === 'DROP_TIME' || onlyShowTime;
    const dropMonth = calendarState === 'DROP_MONTH' || onlyShowMonth;

    const calendarClasses = classNames(this.prefix('calendar'), {
      'drop-time': dropTime,
      'drop-month': dropMonth,
      'sliding-left': calendarState === 'SLIDING_L',
      'sliding-right': calendarState === 'SLIDING_R'
    }, className);

    const elementProps = _.omit(props, Object.keys(propTypes));
    const calendar = [
      <WeekHeader key={'WeekHeader'} />,
      <MonthView
        key={'MonthView'}
        activeDate={pageDate}
        value={value}
        onClick={onSelect}
        onMouseMove={onMouseMove}
        disabledDate={this.disabledDate}
      />
    ];

    const timeDropdownProps = _.pick(props, Object.keys(calendarPropTypes));

    return (
      <div
        {...elementProps}
        className={calendarClasses}
        ref={calendarRef}
      >
        <MonthHeader
          date={pageDate}
          format={format}
          showMonth={showMonth}
          showDate={showDate}
          showTime={showTime}
          disabledBackward={this.disabledBackward()}
          disabledForword={this.disabledForword()}
          disabledDate={this.disabledDate}
          disabledTime={this.disabledTime}
          onMoveForword={this.handleMoveForword}
          onMoveBackward={this.handleMoveBackward}
          onToggleMonthDropdown={onToggleMonthDropdown}
          onToggleTimeDropdown={onToggleTimeDropdown}
        />
        {showDate && calendar}
        {
          showMonth ? (
            <MonthDropdown
              date={pageDate}
              show={dropMonth}
              disabledMonth={this.disabledMonth}
              onClick={onChangePageDate}
            />
          ) : null
        }
        {
          showTime ? (
            <TimeDropdown
              {...timeDropdownProps}
              date={pageDate}
              format={format}
              show={dropTime}
              onClick={onChangePageTime}
            />
          ) : null
        }

      </div>
    );
  }
}

Calendar.propTypes = propTypes;

export default decorate()(Calendar);
