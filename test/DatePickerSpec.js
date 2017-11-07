import React from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';

import DatePicker from '../src/DatePicker';

describe('DatePicker', () => {

  it('Should render a div with "rsuite-daterangepicker-calendar" class', () => {

    const instance = ReactTestUtils.renderIntoDocument(
      <DatePicker />
    );

    assert.equal(findDOMNode(instance).nodeName, 'DIV');
    assert.ok(findDOMNode(instance).className.match(/\brsuite-daterangepicker-calendar\b/));
  });



  it('Should output a date', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <DatePicker calendarDate={[moment('2017-08'), moment('2017-09')]} index={0} />
    );
    assert.equal(findDOMNode(instance).querySelector('.calendar-header-title ').innerText, '2017-08');
  });

  it('Should call `onChangeCalendarDate` callback', (done) => {

    const instance = ReactTestUtils.renderIntoDocument(
      <DatePicker
        calendarDate={[moment('2017-08'), moment('2017-09')]}
        index={0}
        onChangeCalendarDate={() => {
          done();
        }}
      />
    );

    ReactTestUtils.Simulate.click(findDOMNode(instance).querySelector('.calendar-header-backward'));
  });

  it('Should call `onChangeCalendarDate` callback', (done) => {

    const instance = ReactTestUtils.renderIntoDocument(
      <DatePicker
        calendarDate={[moment('2017-08'), moment('2017-10')]}
        index={0}
        onChangeCalendarDate={() => {
          done();
        }}
      />
    );
    ReactTestUtils.Simulate.click(findDOMNode(instance).querySelector('.calendar-header-forward'));
  });

  it('Should call `onChangeCalendarDate` callback', (done) => {

    const instance = ReactTestUtils.renderIntoDocument(
      <DatePicker
        calendarDate={[moment('2017-08'), moment('2017-10')]}
        index={0}
        onChangeCalendarDate={() => {
          done();
        }}
      />
    );
    ReactTestUtils.Simulate.click(findDOMNode(instance).querySelector('.month-dropdown-month-cell'));
  });


  it('Should change calendarState', () => {

    const instance = ReactTestUtils.renderIntoDocument(
      <DatePicker
        calendarDate={[moment('2017-08'), moment('2017-10')]}
        index={0}
      />
    );
    instance.toggleMonthDropdown(() => {
      assert.equal(instance.state.calendarState, 'DROP_MONTH');
    });

    instance.toggleMonthDropdown(() => {
      assert.equal(instance.state.calendarState, null);
    });
  });


});
