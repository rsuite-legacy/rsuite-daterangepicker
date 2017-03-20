import React, { PropTypes } from 'react';

const MonthHeader = ({ date, onMoveForword, onMoveBackward, onClickTitle }) => (
    <div className="monthHeader">
        <i className="monthHeader-backward icon icon-chevron-left"
            onClick={onMoveBackward}
            >

        </i>
        <span className="monthHeader-title" onClick={onClickTitle}>
        { date.getFullYear() + ' - ' + (date.getMonth() + 1) }
        </span>
        <i className="monthHeader-forward icon icon-chevron-right"
            onClick={onMoveForword}
            >

        </i>
    </div>
);

MonthHeader.propTypes = {
    date: PropTypes.instanceOf(Date),
    onMoveForword: PropTypes.func,
    onMoveBackward: PropTypes.func,
    onClickTitle: PropTypes.func
};

export default MonthHeader;
