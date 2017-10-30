import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Markdown } from 'markdownloader';
import { Header, Navbar, Nav, Row, Col } from 'rsuite';
import Affix from 'rsuite-affix';


import './less/index.less';
import DateRangePickerDefault from './example/DateRangePickerDefault';
import DateRangePickerDisabled from './example/DateRangePickerDisabled';
import DateRangePickerCustomToolbar from './example/DateRangePickerCustomToolbar';
import DateRangePickerIntl from './example/DateRangePickerIntl';
import DateRangePickerValue from './example/DateRangePickerValue';
import DateRangePickerToggle from './example/DateRangePickerToggle';
import DateRangePickerInModal from './example/DateRangePickerInModal';
import DateRangePickerHoverRange from './example/DateRangePickerHoverRange';

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
              <h3>默认</h3>

              <DateRangePickerDefault />

              <Markdown>
                {require('./md/DateRangePickerDefault.md')}
              </Markdown>

              <hr id="disabled" className="target-fix" />
              <h3>禁用</h3>
              <DateRangePickerDisabled />
              <Markdown>
                {require('./md/DateRangePickerDisabled.md')}
              </Markdown>

              <hr id="hover-range" className="target-fix" />
              <h3>选择整周、整月</h3>
              <DateRangePickerHoverRange />
              <Markdown>
                {require('./md/DateRangePickerHoverRange.md')}
              </Markdown>

              <hr id="custom-toolbar" className="target-fix" />
              <h3>自定义快捷项</h3>
              <DateRangePickerCustomToolbar />
              <Markdown>
                {require('./md/DateRangePickerCustomToolbar.md')}
              </Markdown>

              <hr id="locale" className="target-fix" />
              <h3>本地化</h3>
              <DateRangePickerIntl />
              <Markdown>
                {require('./md/DateRangePickerIntl.md')}
              </Markdown>

              <hr id="controlled" className="target-fix" />
              <h3>非受控与受控</h3>
              <DateRangePickerValue />
              <Markdown>
                {require('./md/DateRangePickerValue.md')}
              </Markdown>

              <hr id="toggle" className="target-fix" />
              <h3>控制展开与关闭</h3>
              <DateRangePickerToggle />
              <Markdown>
                {require('./md/DateRangePickerToggle.md')}
              </Markdown>

              <hr id="inmodal" className="target-fix" />
              <h3>在 Modal 中</h3>
              <DateRangePickerInModal />

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
