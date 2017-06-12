import React from 'react';
const WeekHeader = React.createClass({
  contextTypes: {
    locale: React.PropTypes.object
  },
  render() {
    const { locale } = this.context;
    return (
      <div className="weekHeader">
        {
          locale.week.map((item, index) => <span key={index} className="weekHeader-day">{item}</span>)
        }
      </div>
    );
  }
});

export default WeekHeader;
