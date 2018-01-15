import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import omit from 'lodash/omit';
import Weeks from './Weeks';
import getMonthView from '../utils/getMonthView';
import { instanceOfMoment } from '../utils/momentPropTypes';


const propTypes = {
  activeDate: instanceOfMoment,
  value: PropTypes.arrayOf(instanceOfMoment),
  hoverValue: PropTypes.arrayOf(instanceOfMoment),
  onClick: PropTypes.func,
  onMouseMove: PropTypes.func,
  disabledDate: PropTypes.func,
  isoWeek: PropTypes.bool
};

const defaultProps = {
  activeDate: moment()
};

// is two date in the same month
function inSameMonth(dateA, dateB) {
  return dateA.month() === dateB.month();
}


class MonthView extends React.Component {
  render() {

    const {
      activeDate,
      value,
      hoverValue,
      onClick,
      onMouseMove,
      disabledDate,
      className,
      isoWeek,
      ...props
    } = this.props;

    const thisMonthDate = activeDate.clone().date(1);
    const classes = classNames('month-view', className);
    const elementProps = omit(props, Object.keys(propTypes));

    return (
      <div
        {...elementProps}
        className={classes}
      >
        <div className="month-view-weeks-wrapper">

          <Weeks
            weeks={getMonthView(thisMonthDate, isoWeek)}
            selected={value}
            hoverValue={hoverValue}
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
