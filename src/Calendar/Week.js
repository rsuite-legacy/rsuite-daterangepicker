import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import _ from 'lodash';
import Type from '../Type';

const propTypes = {
  weekendDate: PropTypes.instanceOf(moment),
  selected: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  hoverValue: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  onClick: PropTypes.func,
  disabledDate: PropTypes.func,
  inSameMonth: PropTypes.func,
  onMouseMove: PropTypes.func
};

const defaultProps = {
  selected: [],
  hoverValue: []
};

class Week extends React.Component {

  renderDays() {
    const {
      weekendDate,
      disabledDate,
      inSameMonth,
      selected,
      hoverValue,
      onClick,
      onMouseMove
    } = this.props;

    let days = [];
    for (let i = 0; i < 7; i += 1) {

      let thisDate = moment(weekendDate).add(i, 'd');
      let disabled = disabledDate && disabledDate(thisDate.clone(), [
        selected && selected[0] ? selected[0].clone() : null,
        selected && selected[1] ? selected[1].clone() : null
      ], Type.CALENDAR);
      let isToday = thisDate.isSame(moment(), 'date');
      let inRange = false;

      if (selected[1] && selected[0]) {
        if (thisDate.isBefore(selected[1], 'date') && thisDate.isAfter(selected[0], 'date')) {
          inRange = true;
        }
        if (thisDate.isBefore(selected[0], 'date') && thisDate.isAfter(selected[1], 'date')) {
          inRange = true;
        }
      }

      let unSameMonth = !(inSameMonth && inSameMonth(thisDate));

      const isSelected = !unSameMonth && ((selected[0] && thisDate.isSame(selected[0], 'date')) || (selected[1] && thisDate.isSame(selected[1], 'date')));
      if (!isSelected && hoverValue[1] && hoverValue[0]) {
        if (!thisDate.isAfter(hoverValue[1], 'date') && !thisDate.isBefore(hoverValue[0], 'date')) {
          inRange = true;
        }
        if (!thisDate.isAfter(hoverValue[0], 'date') && !thisDate.isBefore(hoverValue[1], 'date')) {
          inRange = true;
        }
      }

      let classes = classNames('week-day', {
        'un-same-month': unSameMonth,
        'is-today': isToday,
        selected: isSelected,
        'in-range': !unSameMonth && inRange,
        disabled
      });

      let title = thisDate.format('YYYY-MM-DD');

      days.push(
        <div
          className={classes}
          role="menu"
          tabIndex="-1"
          title={isToday ? `${title} (Today)` : title}
          onMouseMove={!disabled && onMouseMove && onMouseMove.bind(null, thisDate)}
          onClick={!disabled && onClick && onClick.bind(null, thisDate)}
          key={title}
        >
          <span className="date-item">{thisDate.date()}</span>
        </div>
      );
    }
    return days;
  }

  render() {
    const {
      className,
      ...props
    } = this.props;

    const classes = classNames('week', className);
    const elementProps = _.omit(props, Object.keys(propTypes));

    return (
      <div
        {...elementProps}
        className={classes}
      >
        {this.renderDays()}
      </div>
    );
  }
}

Week.propTypes = propTypes;
Week.defaultProps = defaultProps;

export default Week;
