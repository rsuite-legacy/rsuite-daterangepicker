import React from 'react';

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WeekHeader = () => (
    <div className="weekHeader">
        {
            week.map((item, index) => <span key={index} className="weekHeader-day">{item}</span>)
        }
    </div>
);

export default WeekHeader;
