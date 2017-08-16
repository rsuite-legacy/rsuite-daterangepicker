import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import RootCloseWrapper from 'rsuite-utils/lib/Overlay/RootCloseWrapper';
import _ from 'lodash';
import DateContainer from './DateContainer';
import calendarPropTypes from './calendarPropTypes';
import decorate from './utils/decorate';
import { IntlProvider } from './intl';
import defaultLocale from './locale';
import Toolbar from './Toolbar';
import DatePicker from './DatePicker';

const propTypes = {
  ...calendarPropTypes,
  ranges: Toolbar.propTypes.ranges,
  value: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  calendarDefaultDate: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  placeholder: PropTypes.string,
  renderPlaceholder: PropTypes.func,
  format: PropTypes.string,
  disabled: PropTypes.bool,
  locale: PropTypes.object,
  inline: PropTypes.bool,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
  onSelect: PropTypes.func,
  onOk: PropTypes.func
};

const defaultProps = {
  format: 'YYYY-MM-DD',
  placeholder: '',
  locale: defaultLocale
};

class DateRangePicker extends Component {
  constructor(props) {
    super(props);

    const { defaultValue, value } = props;
    const activeValue = value || defaultValue;

    let calendarDate = [moment(), moment().add(1, 'month')];

    if (activeValue) {
      let isSameMonth = activeValue[0].isSame(activeValue[1], 'month');
      calendarDate = [
        activeValue[0],
        isSameMonth ? activeValue[1].add(1, 'month') : activeValue[1]
      ];
    }

    this.state = {
      value: activeValue,
      force: false,
      calendarState: 'HIDE',
      calendarDate // display calendar date
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value, calendarDefaultDate } = this.props;
    if (nextProps.value !== value) {
      this.setState({ value: nextProps.value });
    }
    if (nextProps.calendarDefaultDate !== calendarDefaultDate) {
      this.setState({ calendarDefaultDate: nextProps.calendarDefaultDate });
    }
  }


  getValue = () => (this.props.value || this.state.value)

  getDateString() {
    const { placeholder, format } = this.props;
    const value = this.getValue();

    return value ? moment(value).format(this.props.format) : (
      <div className="placeholder-text">
        {placeholder || format}
      </div>
    );
  }


  handleOK = (event) => {
    const { onOk } = this.props;
    this.updateValue();
    onOk && onOk(this.state.pageDate, event);
  }

  updateValue(nextPageDate, unclosed) {
    const { value, pageDate } = this.state;
    const { onChange } = this.props;
    const nextValue = !_.isUndefined(nextPageDate) ? nextPageDate : pageDate;

    this.setState({
      pageDate: nextValue || moment(),
      value: nextValue
    });

    if (nextValue !== value || !nextValue.isSame(value)) {
      onChange && onChange(nextValue);
    }

    if (!unclosed) {
      this.handleClose();
    }

  }

  resetPageDate() {
    const { calendarDefaultDate } = this.props;
    const value = this.getValue();
    this.setState({
      pageDate: value || calendarDefaultDate || moment()
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

  handleToggle = () => {
    const { calendarState } = this.state;
    if (calendarState === 'SHOW') {
      this.handleClose();
    } else if (calendarState === 'HIDE') {
      this.handleOpen();
    }
  }

  reset = () => {
    this.setState({ pageDate: moment() });
    this.updateValue(null);
  }

  disabledOkButton = (date) => {
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
      return calendarProps[key](date);
    });
  }

  render() {
    const {
      className,
      defaultClassName,
      locale,
      renderPlaceholder,
      disabled,
      ranges
    } = this.props;

    const {
      calendarState,
      calendarDate,
      pageDate
    } = this.state;

    const value = this.getValue();
    const paneClasses = classNames(this.prefix('pane'), {
      hide: calendarState === 'HIDE'
    });

    const elementProps = _.omit(this.props, Object.keys(propTypes));
    const calendar = (
      <div>
        <DatePicker
          index={0}
          value={[moment(), moment().add(1, 'month')]}
          calendarDate={calendarDate}
          onChangeCalendarDate={this.handleChangeCalendarDate}
        />
        <DatePicker
          index={1}
          calendarDate={calendarDate}
          value={[moment(), moment().add(1, 'month')]}
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
                showCleanButton={!this.props.value && !!value}
                onClean={value && this.reset}
                value={value}
                renderPlaceholder={renderPlaceholder}
              />
              <div
                className={paneClasses}
              >
                {calendar}
                <Toolbar
                  ranges={ranges}
                  pageDate={pageDate}
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
