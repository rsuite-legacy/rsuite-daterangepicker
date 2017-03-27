import React from 'react';
import ReactDOM from 'react-dom';
import { Markdown } from 'markdownloader';
import { Header, Navbar, Nav, Row, Col } from 'rsuite';


import  './less/index.less';
import  '../src/less/index.less';

import DateRangePicker from './examples/DateRangePicker';

const App = React.createClass({
    render() {
        return (
            <div className='doc-page'>
                <Header inverse>
                    <div className='container'>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='#'><span className='prefix'>R</span>Suite  DateRangePicker</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <Nav.Item href='https://rsuite.github.io'>RSuite</Nav.Item>
                                <Nav.Item href='https://github.com/rsuite/rsuite-daterangepicker'>GitHub</Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Header>

                <div className='container'>
                    <h3>DateRangePicker 日期范围选择框</h3>
                    <DateRangePicker />
                    <Markdown>
                        {require('./md/default.md')}
                    </Markdown>

                    <br />
                    <h4>属性</h4>
                    <Markdown>
                        {require('./md/props.md')}
                    </Markdown>
                </div>

            </div>
        );
    }
});

ReactDOM.render(<App />,
    document.getElementById('app')
);
