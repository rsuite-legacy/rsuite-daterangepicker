import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import _ from 'lodash';
import MonthDropdown from './MonthDropdown';
import MonthView from './MonthView';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';
import decorate from '../utils/decorate';

const propTypes = {
  disabledDate: PropTypes.func,
  calendarState: PropTypes.string,
  index: PropTypes.number,
  calendarDate: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  hoverValue: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
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

const defaultProps = {
  calendarDate: [moment(), moment().add(1, 'month')],
  index: 0
};

class Calendar extends React.Component {

  getPageDate() {
    const { calendarDate, index } = this.props;
    return calendarDate[index];
  }

  handleMoveForword = () => {
    const { onMoveForword } = this.props;
    onMoveForword && onMoveForword(this.getPageDate().clone().add(1, 'month'));
  }

  handleMoveBackward = () => {
    const { onMoveBackward } = this.props;
    onMoveBackward && onMoveBackward(this.getPageDate().clone().add(-1, 'month'));
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
      isAfter = date.isAfter(calendarDate[0], 'month');
      return !isAfter;
    }

    isAfter = calendarDate[1].isAfter(date, 'month');
    return !isAfter;
  }


  shouldMountDate(props) {
    const { format } = props || this.props;
    return /Y/.test(format) && /M/.test(format) && /D/.test(format);
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
      format,
      disabledDate,
      calendarRef,
      className,
      value,
      hoverValue,
      ...props
    } = this.props;

    const pageDate = this.getPageDate();
    const dropMonth = calendarState === 'DROP_MONTH';
    const calendarClasses = classNames(this.prefix('calendar'), {
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
        hoverValue={hoverValue}
        onClick={onSelect}
        onMouseMove={onMouseMove}
        disabledDate={disabledDate}
      />
    ];

    return (
      <div
        {...elementProps}
        className={calendarClasses}
        ref={calendarRef}
      >
        <MonthHeader
          date={pageDate}
          format={format}
          showDate={true}
          disabledBackward={this.disabledBackward()}
          disabledForword={this.disabledForword()}
          onMoveForword={this.handleMoveForword}
          onMoveBackward={this.handleMoveBackward}
          onToggleMonthDropdown={onToggleMonthDropdown}
          onToggleTimeDropdown={onToggleTimeDropdown}
        />
        {calendar}
        <MonthDropdown
          date={pageDate}
          disabledMonth={this.disabledMonth}
          onClick={onChangePageDate}
          dropMonth={dropMonth}
        />
      </div>
    );
  }
}

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default decorate()(Calendar);
