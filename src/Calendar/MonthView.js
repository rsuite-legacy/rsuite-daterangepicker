import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import _ from 'lodash';
import Weeks from './Weeks';


const propTypes = {
  activeDate: PropTypes.instanceOf(moment),
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  onClick: PropTypes.func,
  onMouseMove: PropTypes.func,
  disabledDate: PropTypes.func
};

const defaultProps = {
  activeDate: moment()
};

/**
  * Get all weeks of this month
  * @params monthDate
  * @return date[]
  */
function getMonthView(monthDate) {

  let firstDayOfMonth = monthDate.day();
  let distance = 0 - firstDayOfMonth;
  let firstWeekendDate = monthDate.clone().add(distance, 'days');

  let weeks = [firstWeekendDate];
  let nextWeekendDate = firstWeekendDate.clone().add(7, 'days');

  weeks.push(nextWeekendDate);
  while (weeks.length < 6) {
    nextWeekendDate = nextWeekendDate.clone().add(7, 'days');
    weeks.push(nextWeekendDate);
  }

  return weeks;
}

// is two date in the same month
function inSameMonth(dateA, dateB) {
  return dateA.month() === dateB.month();
}


class MonthView extends React.Component {
  render() {

    const {
      activeDate,
      value,
      onClick,
      onMouseMove,
      disabledDate,
      className,
      ...props
    } = this.props;

    const thisMonthDate = activeDate.clone().date(1);
    const classes = classNames('month-view', className);
    const elementProps = _.omit(props, Object.keys(propTypes));

    return (
      <div
        {...elementProps}
        className={classes}
      >
        <div className="month-view-weeks-wrapper">

          <Weeks
            weeks={getMonthView(thisMonthDate)}
            selected={value}
            onClick={onClick}
            onMouseMove={onMouseMove}
            inSameMonth={date => inSameMonth(date, thisMonthDate)}
            disabledDate={disabledDate}
          />

        </div>
      </div>
    );
  }
}

MonthView.propTypes = propTypes;
MonthView.defaultProps = defaultProps;

export default MonthView;
