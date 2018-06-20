import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Markdown } from 'react-markdown-reader';
import moment from 'moment';
import { Button, ButtonToolbar, Modal } from 'rsuite';
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
        <Markdown>{require('../README.md')}</Markdown>

        <h2>示例</h2>
        <CodeView
          dependencies={{
            moment,
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerDefault.md')}
        </CodeView>

        <CodeView
          dependencies={{
            moment,
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerDisabled.md')}
        </CodeView>

        <CodeView
          dependencies={{
            moment,
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerHoverRange.md')}
        </CodeView>

        <CodeView
          dependencies={{
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerOneTap.md')}
        </CodeView>

        <CodeView
          dependencies={{
            moment,
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerCustomToolbar.md')}
        </CodeView>

        <CodeView
          dependencies={{
            moment,
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerIntl.md')}
        </CodeView>

        <CodeView
          dependencies={{
            moment,
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerValue.md')}
        </CodeView>

        <CodeView
          dependencies={{
            Button,
            ButtonToolbar,
            moment,
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerToggle.md')}
        </CodeView>

        <CodeView
          dependencies={{
            Button,
            Modal,
            moment,
            DateRangePicker
          }}
        >
          {require('./md/DateRangePickerInModal.md')}
        </CodeView>

        <Markdown>{require('./md/props.md')}</Markdown>
      </PageContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
