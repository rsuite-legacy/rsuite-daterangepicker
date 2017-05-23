import React, { PropTypes } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import Overlay from 'rsuite/lib/fixtures/Overlay';
import Calendar from './Calendar.js';
import Moment from 'moment';
import classNames from 'classnames';
import { Dropdown, Button, ButtonToolbar } from 'rsuite';
import { getWidth, getOffset, on } from 'dom-lib';
import debounce from './utils/debounce';


const SLIDING_LEFT = 'SLIDING_L';
const SLIDING_RIGHT = 'SLIDING_R';
const EDITING = 'EDITING';
const WAITING = 'WAITING';

const CalendarState = {
  SLIDING_LEFT,
  SLIDING_RIGHT,
  EDITING,
  WAITING
};

const ListButton = ({ className, label, onClick, disabled, ...rest }) => {
  let btnClass = classNames({
    'btn': true,
    'disabled': disabled
  }, className);
  return (
    <Button
      className={btnClass}
      title={label}
      onClick={!disabled && onClick}
      {...rest}
    >
      {label}
    </Button>
  );
};

ListButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

const SingleDatePicker = React.createClass({
  propTypes: {
    date: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func,
    ranges: PropTypes.array
  },

  getInitialState() {
    const { date } = this.props;
    let pageDate = Moment(date || new Date()).startOf('month').toDate();
    return {
      calendarState: CalendarState.WAITING,
      pageDate
    };
  },

  componentDidUpdate(prevProps, prevState) {
    const { calendarState } = this.state;
    if (
      calendarState === CalendarState.SLIDING_LEFT ||
      calendarState === CalendarState.SLIDING_RIGHT
    ) {
      setTimeout(
        () => this.setCalendarState(CalendarState.WAITING),
        0
      );
    }
  },

  setCalendarState(calendarState) {
    this.setState({ calendarState });
  },

  setPageDate(pageDate) {
    this.setState({ pageDate: Moment(pageDate).startOf('month').toDate() });
    this.setCalendarState(CalendarState.WAITING);
  },

  goNextMonth() {
    const { pageDate } = this.state;
    this.setPageDate(Moment(pageDate).add(1, 'M').toDate());
    this.setCalendarState(CalendarState.SLIDING_LEFT);
  },

  goPrevMonth() {
    const { pageDate } = this.state;
    this.setPageDate(Moment(pageDate).subtract(1, 'M').toDate());
    this.setCalendarState(CalendarState.SLIDING_RIGHT);
  },

  toggleSwitchPanel() {
    const { calendarState } = this.state;
    if (calendarState === CalendarState.WAITING) {
      this.setCalendarState(CalendarState.EDITING);
    }

    if (calendarState === CalendarState.EDITING) {
      this.setCalendarState(CalendarState.WAITING);
    }
  },

  render() {
    const { date, minDate, maxDate, onSelect } = this.props;
    const { calendarState, pageDate } = this.state;
    return (
      <div>
        <Calendar
          calendarState={calendarState}
          selectedDate={date}
          pageDate={pageDate}
          minDate={minDate}
          maxDate={maxDate}
          onMoveForword={this.goNextMonth}
          onMoveBackward={this.goPrevMonth}
          onSelect={onSelect}
          onClickTitle={this.toggleSwitchPanel}
          onChangePageDate={this.setPageDate}
          refs={ref => { this.calendar = ref; }}
        />
      </div>
    );
  }
});

export default React.createClass({
  propTypes: {
    defaultStartDate: PropTypes.instanceOf(Date),
    defaultEndDate: PropTypes.instanceOf(Date),
    startMinDate: PropTypes.instanceOf(Date),
    startMaxDate: PropTypes.instanceOf(Date),
    endMinDate: PropTypes.instanceOf(Date),
    endMaxDate: PropTypes.instanceOf(Date),
    attachTo: PropTypes.element,
    ranges: PropTypes.array,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    placement: PropTypes.oneOf(['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']),
    messages: PropTypes.object,
    disabled: PropTypes.bool
  },
  childContextTypes: {
    messages: PropTypes.object
  },
  getDefaultProps() {
    const ranges = [
      { label: '今天', range: [Moment(), Moment()] },
      { label: '昨天', range: [Moment().subtract(1, 'd'), Moment()] },
      { label: '本周', range: [Moment().startOf('week'), Moment()] },
      { label: '本月', range: [Moment().startOf('month'), Moment()] }
    ];
    function noop() { }
    return {
      ranges,
      placement: 'bottomRight',
      onChange: noop,
      messages: {
        week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    };
  },
  getChildContext() {
    return {
      messages: this.props.messages
    };
  },
  getInitialState() {
    const { defaultStartDate, defaultEndDate } = this.props;
    let startDate = defaultStartDate;
    let endDate = defaultEndDate;
    return {
      startDate,
      shownStartDate: startDate,
      endDate,
      shownEndDate: endDate,
      show: false,
      width: 472,
      offsetLeft: null,
      offsetRight: null
    };
  },

  handelClear() {
    const { onClear } = this.props;

    this.setState({
      shownStartDate: null,
      shownEndDate: null
    });

    onClear && onClear();
  },
  handleCancel() {

    const { startDate, endDate } = this.state;

    this.setState({
      shownStartDate: startDate,
      shownEndDate: endDate
    });

    this.hide();
  },

  show() {
    this.setState({ show: true });
  },

  hide() {
    this.setState({ show: false });
  },

  toggle() {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    const { show } = this.state;
    if (show) this.hide();
    else this.show();
  },

  apply() {
    const { shownStartDate, shownEndDate } = this.state;
    this.setState({ startDate: shownStartDate, endDate: shownEndDate });
    this.props.onChange(shownStartDate, shownEndDate);
    this.hide();
  },

  discardChanges() {
    const { startDate, endDate } = this.state;
    this.setState({
      shownStartDate: startDate,
      shownEndDate: endDate
    });
    this.hide();
  },

  getContainerEl() {
    const { attachTo } = this.props;
    if (attachTo) return attachTo;
    return ReactDom.findDOMNode(this.container);
  },

  getTargetEl() {
    return ReactDom.findDOMNode(this.target);
  },

  handleStartDateChange(shownStartDate) {
    const { onSelect } = this.props;
    onSelect && onSelect(shownStartDate, 'start');
    this.setState({ shownStartDate });

  },

  handleEndDateChange(shownEndDate) {
    const { onSelect } = this.props;
    onSelect && onSelect(shownEndDate, 'end');
    this.setState({ shownEndDate });
  },

  handleRangesClick(range) {
    if (!range) return;

    if (range.length !== 2) return;

    const startMoment = range[0].clone();
    const endMoment = range[1].clone();

    this.setState({
      shownStartDate: startMoment.toDate(),
      shownEndDate: endMoment.toDate()
    });

    const startPageDate = startMoment.startOf('month').toDate();
    const endPageDate = endMoment.startOf('month').toDate();
    this.startDatePicker.setPageDate(startPageDate);
    this.endDatePicker.setPageDate(endPageDate);
  },

  renderStartDatePicker() {
    const { startMinDate, startMaxDate } = this.props;
    const { shownStartDate } = this.state;
    return (
      <div className="DateRangePicker-start">
        <div className="DateRangePicker-start-title">
          <p className="">开始时间</p>
        </div>
        <div className="DateRangePicker-start-container">
          <SingleDatePicker
            minDate={startMinDate}
            maxDate={startMaxDate}
            date={shownStartDate}
            onSelect={this.handleStartDateChange}
            ref={ref => { this.startDatePicker = ref; }}
          />
        </div>
      </div>
    );
  },

  renderEndDatePicker() {
    const { endMinDate, endMaxDate } = this.props;
    const { shownEndDate } = this.state;
    return (
      <div className="DateRangePicker-end">
        <div className="DateRangePicker-end-title">
          <p className="">结束时间</p>
        </div>
        <div className="DateRangePicker-end-container">
          <SingleDatePicker
            minDate={endMinDate}
            maxDate={endMaxDate}
            date={shownEndDate}
            onSelect={this.handleEndDateChange}
            ref={ref => { this.endDatePicker = ref; }}
          />
        </div>
      </div>
    );
  },

  renderRanges() {
    const { ranges, onClear } = this.props;
    return (
      <div className="DateRangePicker-ranges">

        <Dropdown title={'预设'} shape='primary' onSelect={this.handleRangesClick}>
          {ranges.map(i =>
            <Dropdown.Item
              key={i.label}
              label={i.label}
              eventKey={i.range}
            >
              {i.label}
            </Dropdown.Item>
          )}
        </Dropdown>

        {onClear && (
          <ListButton
            shape='primary'
            label="清空"
            onClick={this.handelClear}
          />
        )}

      </div>
    );
  },

  renderActions() {
    const { defaultStartDate, defaultEndDate } = this.props;
    const { shownStartDate, shownEndDate } = this.state;
    const shouldRenderResetButton = defaultStartDate || defaultEndDate;
    const isValidRange = shownStartDate <= shownEndDate;
    return (
      <div className="DateRangePicker-actions">
        <ListButton
          shape='primary'
          className="ml10"
          disabled={!isValidRange}
          onClick={this.apply}
          label="确定"
        />
        <ListButton
          shape='default'
          label="取消"
          onClick={this.handleCancel}
        />

      </div>
    );
  },

  renderDatePicker() {
    const { offsetLeft, offsetRight, width, containerWidth } = this.state;
    const { placement } = this.props;
    const styles = {};


    if (!!~placement.indexOf('Left')) {
      styles.marginLeft = (offsetRight < (width / 2 - containerWidth / 2)) ? -offsetRight : -offsetLeft;
    }

    if (!!~placement.indexOf('Right')) {
      styles.marginLeft = offsetLeft;
    }

    return (
      <div
        className="DateRangePicker noselect"
        ref={ref => this.target = ref}
        style={styles}
      >
        <div className="DateRangePicker-controlPanel">
          {this.renderRanges()}
        </div>
        <div className="DateRangePicker-container">
          {this.renderStartDatePicker()}
          {this.renderEndDatePicker()}
          {this.renderActions()}
        </div>
        {/* clear float */}
        <div style={{ clear: 'both' }} />
      </div>
    );
  },

  renderContainer() {
    const { attachTo, disabled } = this.props;
    const { startDate, endDate } = this.state;
    if (attachTo) return null;
    const format = 'YYYY/MM/DD';

    const classes = classNames('DateRangeContainer', {
      disabled
    });

    const defaultSpan = (
      <span style={{ color: '#aaa' }}>{format}</span>
    );

    return (
      <div ref={ref => { this.container = ref; }} style={{ display: 'inline-block' }}>
        <div className={classes} onClick={this.toggle} >
          {startDate ? Moment(startDate).format(format) : defaultSpan}
          <span className="text-muted"> - </span>
          {endDate ? Moment(endDate).format(format) : defaultSpan}
        </div>
      </div>
    );
  },
  setContainerOffset() {
    const container = findDOMNode(this.container);
    const windowWidth = getWidth(window);
    const containerWidth = getWidth(container);
    const containerOffset = getOffset(container);
    const { width } = this.state;

    const offset = width / 2 - containerWidth / 2;
    const offsetRight = windowWidth - containerOffset.left - containerWidth;
    const offsetLeft = containerOffset.left < offset ? containerOffset.left : offset;

    this.setState({
      offsetLeft,
      offsetRight,
      containerWidth
    });
  },
  handleWindowResize() {
    this.setContainerOffset();
  },
  componentDidMount() {
    this._resizeListener = on(window, 'resize', debounce(this.handleWindowResize, 200));
    this.setContainerOffset();
  },
  componentWillUnmount() {
    this._resizeListener && this._resizeListener.off();
  },
  render() {
    const { show } = this.state;

    return (
      <div className="DateRangeWrapper">
        {this.renderContainer()}
        <Overlay
          show={show}
          rootClose={true}
          onHide={this.discardChanges}
          target={this.getContainerEl}
          placement={!!~this.props.placement.indexOf('top') ? 'top' : 'bottom'}
        >
          {this.renderDatePicker()}
        </Overlay>
      </div>
    );
  }

});
