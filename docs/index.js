import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Markdown } from 'react-markdown-reader';
import moment from 'moment';
import { Header, Navbar, Nav, Row, Col, Button, ButtonToolbar, Modal } from 'rsuite';
import Affix from 'rsuite-affix';
import CodeView from 'react-code-view';


import 'react-code-view/lib/less/index.less';
import './less/index.less';


import DateRangePicker from '../src';


class App extends Component {
  render() {
    return (
      <div className="doc-page">
        <Header inverse>
          <div className="container">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">RSUITE DateRangePicker</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <Nav.Item href="https://rsuite.github.io">RSUITE</Nav.Item>
                <Nav.Item href="https://github.com/rsuite/rsuite-daterangepicker">GitHub</Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Header>

        <div className="container">
          <Row>
            <Col md={2} xsHidden smHidden>
              <Affix
                offsetTop={70}
                ref={(ref) => {
                  this.affix = ref;
                }}
              >
                <Nav className="sidebar">
                  <Nav.Item href="#readme">概述</Nav.Item>
                  <Nav.Item href="#default">示例</Nav.Item>
                  <Nav.Item href="#default">&nbsp;&nbsp;- 默认</Nav.Item>
                  <Nav.Item href="#disabled">&nbsp;&nbsp;- 禁用</Nav.Item>
                  <Nav.Item href="#hover-range">&nbsp;&nbsp;- 选择整周、整月</Nav.Item>
                  <Nav.Item href="#custom-toolbar">&nbsp;&nbsp;- 自定义快捷项</Nav.Item>
                  <Nav.Item href="#locale">&nbsp;&nbsp;- 本地化</Nav.Item>
                  <Nav.Item href="#controlled">&nbsp;&nbsp;- 非受控与受控</Nav.Item>
                  <Nav.Item href="#toggle">&nbsp;&nbsp;- 控制展开与关闭</Nav.Item>
                  <Nav.Item href="#api">API</Nav.Item>
                </Nav>
              </Affix>
            </Col>
            <Col md={10}>

              <hr id="readme" className="target-fix" />
              <Markdown>
                {require('../README.md')}
              </Markdown>

              <hr id="default" className="target-fix" />
              <h2>示例</h2>
              <CodeView
                source={require('./md/DateRangePickerDefault.md')}
                dependencies={{
                  moment,
                  DateRangePicker
                }}
              />

              <Markdown>
                {require('./md/DateRangePickerDefault.md')}
              </Markdown>

              <hr id="disabled" className="target-fix" />
              <CodeView
                source={require('./md/DateRangePickerDisabled.md')}
                dependencies={{
                  moment,
                  DateRangePicker
                }}
              />

              <hr id="hover-range" className="target-fix" />
              <CodeView
                source={require('./md/DateRangePickerHoverRange.md')}
                dependencies={{
                  moment,
                  DateRangePicker
                }}
              />

              <hr id="custom-toolbar" className="target-fix" />
              <CodeView
                source={require('./md/DateRangePickerCustomToolbar.md')}
                dependencies={{
                  moment,
                  DateRangePicker
                }}
              />

              <hr id="locale" className="target-fix" />
              <CodeView
                source={require('./md/DateRangePickerIntl.md')}
                dependencies={{
                  moment,
                  DateRangePicker
                }}
              />

              <hr id="controlled" className="target-fix" />
              <CodeView
                source={require('./md/DateRangePickerValue.md')}
                dependencies={{
                  moment,
                  DateRangePicker
                }}
              />

              <hr id="toggle" className="target-fix" />
              <CodeView
                source={require('./md/DateRangePickerToggle.md')}
                dependencies={{
                  Button,
                  ButtonToolbar,
                  moment,
                  DateRangePicker
                }}
              />

              <hr id="inmodal" className="target-fix" />
              <CodeView
                source={require('./md/DateRangePickerInModal.md')}
                dependencies={{
                  Button,
                  Modal,
                  moment,
                  DateRangePicker
                }}
              />

              <hr id="api" className="target-fix" />
              <h3>属性</h3>
              <Markdown>
                {require('./md/props.md')}
              </Markdown>

            </Col>
          </Row>

        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('app')
);
