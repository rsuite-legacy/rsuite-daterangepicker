// @flow

import * as React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import _ from 'lodash';
import { constants } from 'rsuite-utils/lib/Picker';
import { prefix } from 'rsuite-utils/lib/utils';

type Props = {
  date: moment$Moment,
  onMoveForword?: () => void,
  onMoveBackward?: () => void,
  onToggleMonthDropdown?: (event: SyntheticEvent<*>) => void,
  disabledDate?: (date: moment$Moment) => boolean,
  classPrefix?: string,
  className?: string,
  disabledBackward?: boolean,
  disabledForword?: boolean
};

class Header extends React.Component<Props> {
  static defaultProps = {
    classPrefix: `${constants.namespace}-calendar-header`,
    date: moment()
  };

  shouldComponentUpdate(nextProps: Props) {
    return !_.isEqual(this.props, nextProps);
  }

  render() {
    const {
      date,
      onMoveForword,
      onMoveBackward,
      onToggleMonthDropdown,
      classPrefix,
      className,
      disabledDate,
      disabledBackward,
      disabledForword,
      ...rest
    } = this.props;

    const addPrefix = prefix(classPrefix);
    const dateTitleClasses = classNames(addPrefix('title'), {
      error: disabledDate && disabledDate(date)
    }, addPrefix('title-date'));

    const classes = classNames(classPrefix, className);
    const backwardClass = classNames(addPrefix('backward'), {
      [addPrefix('btn-disabled')]: disabledBackward
    });

    const forwardClass = classNames(addPrefix('forward'), {
      [addPrefix('btn-disabled')]: disabledForword
    });
    return (
      <div
        {...rest}
        className={classes}
      >
        <div className={addPrefix('month-toolbar')}>
          <i
            className={backwardClass}
            role="button"
            tabIndex="-1"
            onClick={disabledBackward ? undefined : onMoveBackward}
          />
          <span
            role="button"
            tabIndex="-1"
            className={dateTitleClasses}
            onClick={onToggleMonthDropdown}
          >
            {date && date.format('YYYY-MM')}
          </span>
          <i
            className={forwardClass}
            role="button"
            tabIndex="-1"
            onClick={disabledForword ? undefined : onMoveForword}
          />
        </div>
      </div>
    );
  }
}

export default Header;
