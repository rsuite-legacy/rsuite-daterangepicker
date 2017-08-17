import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import RootCloseWrapper from 'rsuite-utils/lib/Overlay/RootCloseWrapper';
import _ from 'lodash';
import DateContainer from './DateContainer';
import decorate from './utils/decorate';
import { IntlProvider } from './intl';
import defaultLocale from './locale';
import Toolbar from './Toolbar';
import DatePicker from './DatePicker';
import setTimingMargin from './utils/setTimingMargin';

const propTypes = {
  disabledDate: PropTypes.func,
  ranges: Toolbar.propTypes.ranges,
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  calendarDefaultDate: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  placeholder: PropTypes.string,
  renderPlaceholder: PropTypes.func,
  format: PropTypes.string,
  disabled: PropTypes.bool,
  locale: PropTypes.object,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
  onOk: PropTypes.func
};

const defaultProps = {
  format: 'YYYY-MM-DD',
  placeholder: '',
  locale: defaultLocale
};


function getCalendarDate(value = []) {

  let calendarDate = [moment(), moment().add(1, 'month')];

  // Update calendarDate if the value is not null
  if (value[0] && value[1]) {
    let isSameMonth = value[0].clone().isSame(value[1], 'month');
    calendarDate = [
      value[0],
      isSameMonth ? value[1].clone().add(1, 'month') : value[1].clone()
    ];
  }
  return calendarDate;
}


class DateRangePicker extends Component {
  constructor(props) {
    super(props);

    const { defaultValue, value } = props;
    const activeValue = value || defaultValue || [];
    const calendarDate = getCalendarDate(activeValue);

    this.state = {
      value: activeValue,
      selectValue: activeValue,

      // Call `hide()` and `show()` externally
      force: false,

      // Two clicks, the second click ends
      doneSelected: true,
      calendarState: 'HIDE',
      // display calendar date
      calendarDate
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (nextProps.value !== value) {
      this.setState({ value: nextProps.value });
    }
  }

  getValue = () => (this.props.value || this.state.value || [])

  getDateString(date) {
    const { placeholder, format } = this.props;
    const value = date || this.getValue();

    return value[0] && value[1] ?
      `${value[0].format(format)} ~ ${value[1].format(format)}` :
      (
        <div className="placeholder-text">
          {placeholder || `${format} ~ ${format}`}
        </div>
      );
  }


  handleOK = (event) => {
    const { onOk } = this.props;
    this.updateValue();
    onOk && onOk(this.state.selectValue, event);
  }

  updateValue(nextSelectValue, unclosed) {
    const { value, selectValue } = this.state;
    const { onChange } = this.props;
    const nextValue = !_.isUndefined(nextSelectValue) ? nextSelectValue : selectValue;

    if (!unclosed) {
      this.handleClose();
    }

    this.setState({
      selectValue: nextValue || [],
      value: nextValue
    });

    if (!_.isEqual(nextValue, value)) {
      onChange && onChange(nextValue);
    }

  }

  /**
   * Toolbar operation callback function
   */
  handleShortcutPageDate = (selectValue, unclosed) => {
    this.updateValue(selectValue, unclosed);
  }

  resetPageDate() {
    this.setState({
      selectValue: this.getValue()
    });
  }

  show() {
    const { disabled } = this.props;
    !disabled && this.handleOpen(true);
  }

  hide() {
    const { disabled } = this.props;
    !disabled && this.handleClose(true);
  }

  handleOpen = (force) => {

    const { onToggle } = this.props;
    this.resetPageDate();
    this.setState({
      calendarState: 'SHOW',
      force
    });

    onToggle && onToggle(true);
    force && this.cleanForce();
  }

  handleClose = (force) => {
    const { onToggle } = this.props;
    this.setState({
      calendarState: 'HIDE',
      force
    });

    onToggle && onToggle(false);
    force && this.cleanForce();
  }

  cleanForce() {
    setTimeout(() => {
      this.setState({ force: false });
    }, 1000);
  }

  handleDocumentClose = () => {
    if (!this.state.force) {
      this.handleClose();
    }
  }

  handleChangeCalendarDate = (index, date) => {
    const { calendarDate } = this.state;
    calendarDate[index] = date;
    this.setState({ calendarDate });
  }

  handleChangeSelectValue = (date) => {
    const { selectValue, doneSelected } = this.state;
    let nextValue = [];

    if (doneSelected) {
      nextValue = [date, undefined, date];
    } else {
      nextValue = [
        selectValue[0],
        date
      ];

      if (nextValue[0].isAfter(nextValue[1])) {
        nextValue.reverse();
      }

      nextValue[0] = setTimingMargin(nextValue[0]);
      nextValue[1] = setTimingMargin(nextValue[1]);
    }

    this.setState({
      doneSelected: !doneSelected,
      selectValue: nextValue
    });

  }

  handleMouseMoveSelectValue = (date) => {
    const { doneSelected, selectValue } = this.state;


    if (doneSelected) {
      return;
    }

    let nextValue = selectValue;
    nextValue[1] = date;

    // If `nextValue[0]` is greater than `nextValue[1]` then reverse order
    if (nextValue[0].isAfter(nextValue[1])) {
      nextValue.reverse();
    }

    this.setState({
      selectValue: nextValue
    });
  }

  handleToggle = () => {
    const { calendarState } = this.state;
    if (calendarState === 'SHOW') {
      this.handleClose();
    } else if (calendarState === 'HIDE') {
      this.handleOpen();
    }
  }

  reset = () => {
    this.setState({ calendarDate: [moment(), moment().add(1, 'month')] });
    this.updateValue([]);
  }

  disabledOkButton = () => {
    const { disabledDate } = this.props;
    const { selectValue, doneSelected } = this.state;

    if (!selectValue[0] || !selectValue[0] || !doneSelected) {
      return true;
    }

    let start = selectValue[0].clone();
    let end = selectValue[1].clone();
    let check = false;

    // If the date is between the start and the end
    // the button is disabled
    while (start.isBefore(end)) {
      if (disabledDate && disabledDate(start)) {
        check = true;
      }
      start.add(1, 'd');
    }
    return check;
  }

  render() {

    const {
      className,
      defaultClassName,
      locale,
      renderPlaceholder,
      disabled,
      ranges,
      disabledDate
    } = this.props;

    const {
      calendarState,
      calendarDate,
      selectValue
    } = this.state;

    const value = this.getValue();
    const paneClasses = classNames(this.prefix('pane'), {
      hide: calendarState === 'HIDE'
    });

    const elementProps = _.omit(this.props, Object.keys(propTypes));
    const calendar = (
      <div>
        <div className={this.prefix('header')}>
          {this.getDateString(selectValue)}
        </div>
        <DatePicker
          index={0}
          value={selectValue}
          disabledDate={disabledDate}
          calendarDate={calendarDate}
          onSelect={this.handleChangeSelectValue}
          onMouseMove={this.handleMouseMoveSelectValue}
          onChangeCalendarDate={this.handleChangeCalendarDate}
        />
        <DatePicker
          index={1}
          calendarDate={calendarDate}
          value={selectValue}
          disabledDate={disabledDate}
          onSelect={this.handleChangeSelectValue}
          onMouseMove={this.handleMouseMoveSelectValue}
          onChangeCalendarDate={this.handleChangeCalendarDate}
        />
      </div>
    );


    const classes = classNames(defaultClassName, this.prefix('dropdown'), className);
    return (
      <RootCloseWrapper onRootClose={this.handleDocumentClose}>
        <div
          {...elementProps}
          className={classes}
        >
          <IntlProvider locale={locale}>
            <div>
              <DateContainer
                disabled={disabled}
                placeholder={this.getDateString()}
                onClick={this.handleToggle}
                showCleanButton={!!value[0] && !!value[1]}
                onClean={value[0] && value[1] && this.reset}
                value={value}
                renderPlaceholder={renderPlaceholder}
              />
              <div
                className={paneClasses}
              >
                {calendar}
                <Toolbar
                  ranges={ranges}
                  disabledOkButton={this.disabledOkButton}
                  onShortcut={this.handleShortcutPageDate}
                  onOk={this.handleOK}
                />
              </div>
            </div>
          </IntlProvider>
        </div>
      </RootCloseWrapper>
    );
  }
}

DateRangePicker.propTypes = propTypes;
DateRangePicker.defaultProps = defaultProps;

export default decorate()(DateRangePicker);
