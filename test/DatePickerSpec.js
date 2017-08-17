import React from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import ReactTestUtils from 'react/lib/ReactTestUtils';

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

});
