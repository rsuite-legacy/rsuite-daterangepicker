import React from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';

import Toolbar from '../src/Toolbar';

describe('Toolbar', () => {

  it('Should render a div with `rsuite-daterangepicker-toolbar` class', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <Toolbar />
    );

    const instanceDOM = findDOMNode(instance);
    assert.equal(instanceDOM.nodeName, 'DIV');
    assert.ok(instanceDOM.className.match(/\brsuite-daterangepicker-toolbar\b/));
  });


  it('Should call `onOk` callback', (done) => {

    const doneOp = () => {
      done();
    };

    const instance = ReactTestUtils.renderIntoDocument(
      <Toolbar onOk={doneOp} />
    );
    const instanceDOM = findDOMNode(instance);
    ReactTestUtils.Simulate.click(instanceDOM.querySelector('.rsuite-daterangepicker-toolbar-right-btn-ok'));
  });

  it('Should call `onShortcut` callback', (done) => {

    const doneOp = () => {
      done();
    };

    const instance = ReactTestUtils.renderIntoDocument(
      <Toolbar onShortcut={doneOp} />
    );
    const instanceDOM = findDOMNode(instance);
    ReactTestUtils.Simulate.click(instanceDOM.querySelector('.rsuite-daterangepicker-toolbar-ranges a'));
  });


  it('Should have a custom className', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <Toolbar className="custom" />
    );
    assert.ok(findDOMNode(instance).className.match(/\bcustom\b/));
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = ReactTestUtils.renderIntoDocument(
      <Toolbar style={{ fontSize }} />
    );
    assert.equal(findDOMNode(instance).style.fontSize, fontSize);
  });


});
