import React from 'react';
import ReactDom from 'react-dom';
import DateRangePicker from '../src';
import '../src/style/main.less';

const App = props => (
    <div id="app" style={{width: 640, margin: 'auto', textAlign: 'center'}}>
        <h1>Date Range Picker</h1>
        <p>
            <a href="https://github.com/rsuite/rsuite-daterangepicker">github</a>
        </p>
        <DateRangePicker />
    </div>
);

ReactDom.render(
    <App />,
    document.getElementById('render-target')
);
