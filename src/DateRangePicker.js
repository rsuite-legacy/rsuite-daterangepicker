import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import { on, getWidth } from 'dom-lib';
import _ from 'lodash';
import DateContainer from './DateContainer';
import decorate from './utils/decorate';
import { IntlProvider } from './intl';
import defaultLocale from './locale';
import Toolbar from './Toolbar';
import DatePicker from './DatePicker';
import setTimingMargin from './utils/setTimingMargin';

const propTypes = {
  align: PropTypes.oneOf(['right', 'left']),
  disabledDate: PropTypes.func,
  ranges: Toolbar.propTypes.ranges,
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  placeholder: PropTypes.string,
  renderPlaceholder: PropTypes.func,
  format: PropTypes.string,
  disabled: PropTypes.bool,
  /* eslint-disable */
  locale: PropTypes.object,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
  onOk: PropTypes.func
};

const defaultProps = {
  align: 'left',
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
      toggleWidth: 0,

      // Call `hide()` and `show()` externally
      forceOpen: false,

      // Two clicks, the second click ends
      doneSelected: true,
      calendarState: 'HIDE',
      // display calendar date
      calendarDate
    };

  }

  componentDidMount() {
    this.isMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (!_.isEqual(nextProps.value, value)) {
      this.setState({ value: nextProps.value });
    }
  }

  componentWillUnmount() {
    this.unbindEvent();
    this.isMounted = false;
  }

  get isMounted() {
    return this.mounted;
  }
  set isMounted(isMounted) {
    this.mounted = isMounted;
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

  bindEvent() {
    this.docClickListener = on(document, 'click', this.handleDocumentClick);
  }

  unbindEvent() {
    this.docClickListener && this.docClickListener.off();
  }

  /**
   * Close menu when click document
   */
  handleDocumentClick = (event) => {
    if (this.isMounted && !this.container.contains(event.target) && !this.state.forceOpen) {
      this.handleClose();
    }
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
    const selectValue = this.getValue();
    const calendarDate = getCalendarDate(selectValue);
    this.setState({
      selectValue,
      calendarDate
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

  handleOpen = (forceOpen) => {

    const { onToggle } = this.props;
    this.resetPageDate();
    this.setState({
      calendarState: 'SHOW',
      forceOpen
    });

    onToggle && onToggle(true);
    forceOpen && this.cleanForce();
    this.bindEvent();
  }

  handleClose = (forceOpen) => {
    const { onToggle } = this.props;

    this.setState({
      calendarState: 'HIDE',
      doneSelected: true,
      forceOpen
    });

    onToggle && onToggle(false);
    forceOpen && this.cleanForce();
    this.unbindEvent();
  }

  cleanForce() {
    setTimeout(() => {
      this.setState({ forceOpen: false });
    }, 1000);
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

      this.setState({
        forceOpen: true,
        calendarDate: getCalendarDate(nextValue)
      });

      this.cleanForce();
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
      this.setState({
        toggleWidth: this.toggle ? getWidth(this.toggle) : 0
      });
    }
  }

  reset = () => {
    this.setState({ calendarDate: [moment(), moment().add(1, 'month')] });
    this.updateValue([]);
  }

  disabledByBetween(start, end) {
    const { disabledDate } = this.props;
    const { selectValue } = this.state;

    let check = false;

    // If the date is between the start and the end
    // the button is disabled
    while (start.isBefore(end)) {
      if (disabledDate && disabledDate(start.clone(), [
        selectValue && selectValue[0] ? selectValue[0].clone() : null,
        selectValue && selectValue[1] ? selectValue[1].clone() : null,
      ])) {
        check = true;
      }
      start.add(1, 'd');
    }

    return check;
  }

  disabledOkButton = () => {
    const { selectValue, doneSelected } = this.state;

    if (!selectValue[0] || !selectValue[1] || !doneSelected) {
      return true;
    }

    return this.disabledByBetween(selectValue[0].clone(), selectValue[1].clone());
  }

  disabledShortcutButton = (value = []) => {
    if (!value[0] || !value[1]) {
      return true;
    }
    return this.disabledByBetween(value[0].clone(), value[1].clone());
  }

  render() {

    const {
      className,
      defaultClassName,
      locale,
      renderPlaceholder,
      disabled,
      ranges,
      align,
      disabledDate
    } = this.props;

    const {
      calendarState,
      calendarDate,
      selectValue,
      doneSelected,
      toggleWidth
    } = this.state;

    const value = this.getValue();
    const paneClasses = classNames(this.prefix('pane'), {
      hide: calendarState === 'HIDE'
    });

    // pane width is 538px
    const paneStyles = {
      marginLeft: align === 'right' ? toggleWidth - 538 : 0
    };

    const elementProps = _.omit(this.props, Object.keys(propTypes));
    const calendar = (
      <div>
        <div className={this.prefix('header')}>
          {this.getDateString(selectValue)}
        </div>
        <DatePicker
          index={0}
          doneSelected={doneSelected}
          value={selectValue}
          disabledDate={disabledDate ? (a, b) => disabledDate(a, b, doneSelected) : null}
          calendarDate={calendarDate}
          onSelect={this.handleChangeSelectValue}
          onMouseMove={this.handleMouseMoveSelectValue}
          onChangeCalendarDate={this.handleChangeCalendarDate}
        />
        <DatePicker
          index={1}
          doneSelected={doneSelected}
          calendarDate={calendarDate}
          value={selectValue}
          disabledDate={disabledDate ? (a, b) => disabledDate(a, b, doneSelected) : null}
          onSelect={this.handleChangeSelectValue}
          onMouseMove={this.handleMouseMoveSelectValue}
          onChangeCalendarDate={this.handleChangeCalendarDate}
        />
      </div>
    );


    const classes = classNames(defaultClassName, this.prefix('dropdown'), className);
    return (
      <IntlProvider locale={locale}>
        <div
          {...elementProps}
          className={classes}
          ref={(ref) => {
            this.container = ref;
          }}
        >
          <DateContainer
            disabled={disabled}
            placeholder={this.getDateString()}
            onClick={this.handleToggle}
            showCleanButton={!!value[0] && !!value[1]}
            onClean={value[0] && value[1] && this.reset}
            value={value}
            renderPlaceholder={renderPlaceholder}
            toggleRef={(ref) => {
              this.toggle = ref;
            }}
          />
          <div
            className={paneClasses}
            style={paneStyles}
          >
            {calendar}
            <Toolbar
              ranges={ranges}
              disabledOkButton={this.disabledOkButton}
              disabledShortcutButton={this.disabledShortcutButton}
              onShortcut={this.handleShortcutPageDate}
              onOk={this.handleOK}
            />
          </div>
        </div>
      </IntlProvider>
    );
  }
}

DateRangePicker.propTypes = propTypes;
DateRangePicker.defaultProps = defaultProps;

export default decorate()(DateRangePicker);
