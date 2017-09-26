import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
import moment from 'moment';

import Calendar from '../src/Calendar';

describe('Calendar', () => {

  it('Should render a div with `calendar` class', () => {

    const instance = ReactTestUtils.renderIntoDocument(
      <Calendar />
    );

    const instanceDOM = findDOMNode(instance);
    assert.equal(findDOMNode(instance).nodeName, 'DIV');
    assert.ok(findDOMNode(instance).className.match(/\bcalendar\b/));
  });

  it('Should call `onSelect` callback', (done) => {

    const doneOp = () => {
      done();
    };

    const instance = ReactTestUtils.renderIntoDocument(
      <Calendar
        format="YYYY-MM-DD"
        calendarState="SHOW"
        calendarDate={[moment(), moment()]}
        onSelect={doneOp}
      />
    );
    const instanceDOM = findDOMNode(instance);
    ReactTestUtils.Simulate.click(instanceDOM.querySelector('.is-today'));
  });

  it('Should have a custom className', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <Calendar className="custom" />
    );
    assert.ok(findDOMNode(instance).className.match(/\bcustom\b/));
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = ReactTestUtils.renderIntoDocument(
      <Calendar style={{ fontSize }} />
    );
    assert.equal(findDOMNode(instance).style.fontSize, fontSize);
  });


});
