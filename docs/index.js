import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Markdown } from 'react-markdown-reader';
import moment from 'moment';
import { Header, Navbar, Nav, Row, Col, Button, ButtonToolbar, Modal } from 'rsuite';
import Affix from 'rsuite-affix';
import CodeView from 'react-code-view';
import { PageContainer } from 'rsuite-docs';


import './less/index.less';


import DateRangePicker from '../src';


class App extends Component {
  render() {
    return (

      <PageContainer
        githubURL="https://github.com/rsuite/rsuite-daterangepicker"
        activeKey="DateRangePicker"
      >

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

        <CodeView
          source={require('./md/DateRangePickerDisabled.md')}
          dependencies={{
            moment,
            DateRangePicker
          }}
        />

        <CodeView
          source={require('./md/DateRangePickerHoverRange.md')}
          dependencies={{
            moment,
            DateRangePicker
          }}
        />

        <CodeView
          source={require('./md/DateRangePickerCustomToolbar.md')}
          dependencies={{
            moment,
            DateRangePicker
          }}
        />

        <CodeView
          source={require('./md/DateRangePickerIntl.md')}
          dependencies={{
            moment,
            DateRangePicker
          }}
        />

        <CodeView
          source={require('./md/DateRangePickerValue.md')}
          dependencies={{
            moment,
            DateRangePicker
          }}
        />

        <CodeView
          source={require('./md/DateRangePickerToggle.md')}
          dependencies={{
            Button,
            ButtonToolbar,
            moment,
            DateRangePicker
          }}
        />

        <CodeView
          source={require('./md/DateRangePickerInModal.md')}
          dependencies={{
            Button,
            Modal,
            moment,
            DateRangePicker
          }}
        />

        <Markdown>
          {require('./md/props.md')}
        </Markdown>

      </PageContainer>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('app')
);
