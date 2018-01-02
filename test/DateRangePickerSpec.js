import React from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';

import DateRangePicker from '../src/DateRangePicker';

describe('DateRangePicker', () => {

  it('Should render a div with "rsuite-daterangepicker" class', () => {

    const instance = ReactTestUtils.renderIntoDocument(
      <DateRangePicker />
    );

    assert.equal(findDOMNode(instance).nodeName, 'DIV');
    assert.ok(findDOMNode(instance).className.match(/\brsuite-daterangepicker\b/));
  });

  it('Should be disabled', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <DateRangePicker disabled />
    );

    assert.ok(findDOMNode(instance).querySelector('.rsuite-daterangepicker-toggle').className.match(/\bdisabled\b/));
  });

  it('Should call `onChange` callback', (done) => {
    const doneOp = () => {
      done();
    };
    let demo;
    const instance = ReactTestUtils.renderIntoDocument(
      <DateRangePicker onChange={doneOp} ref={(ref) => demo = ref} />
    );
    demo.updateValue([moment(), moment()]);
  });

  it('Should call `onToggle` callback', (done) => {
    const doneOp = (show) => {
      if (show) {
        done();
      }
    };

    const instance = ReactTestUtils.renderIntoDocument(
      <DateRangePicker onToggle={doneOp} />
    );
    const instanceDOM = findDOMNode(instance);
    ReactTestUtils.Simulate.click(instanceDOM.querySelector('.rsuite-daterangepicker-toggle'));
  });

  it('Should have a custom className', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <DateRangePicker className="custom" />
    );
    assert.ok(findDOMNode(instance).className.match(/\bcustom\b/));
  });


  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = ReactTestUtils.renderIntoDocument(
      <DateRangePicker style={{ fontSize }} />
    );
    assert.equal(findDOMNode(instance).style.fontSize, fontSize);
  });

  it('Should select a whole week', (done) => {
    const doneOp = (values) => {
      if (moment().startOf('week').isSame(values[0], 'date') && moment().endOf('week').isSame(values[1], 'date')) {
        done();
      }
    };
    const instance = ReactTestUtils.renderIntoDocument(
      <DateRangePicker
        onOk={doneOp}
        hoverRange="week"
      />
    );
    const instanceDOM = findDOMNode(instance);
    const today = instanceDOM.querySelector('.week-day.is-today');
    ReactTestUtils.Simulate.click(today);
    ReactTestUtils.Simulate.click(today);
    ReactTestUtils.Simulate.click(instanceDOM.querySelector('.rsuite-daterangepicker-toolbar-right-btn-ok'));

  });

  it('Should fire onChange if click ok after only select one date in oneTap mode', (done) => {
    const doneOp = (values) => {
      if (moment().startOf('week').isSame(values[0], 'date') && moment().endOf('week').isSame(values[1], 'date')) {
        done();
      }
    };
    const instance = ReactTestUtils.renderIntoDocument(
      <DateRangePicker
        onOk={doneOp}
        hoverRange="week"
        oneTap
      />
    );
    const instanceDOM = findDOMNode(instance);
    const today = instanceDOM.querySelector('.week-day.is-today');
    ReactTestUtils.Simulate.click(today);
    ReactTestUtils.Simulate.click(instanceDOM.querySelector('.rsuite-daterangepicker-toolbar-right-btn-ok'));

  });

});
