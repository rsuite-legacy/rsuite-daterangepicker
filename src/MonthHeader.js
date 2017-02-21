import React, { PropTypes } from 'react';

const MonthHeader = ({ date, onMoveForword, onMoveBackward, onClickTitle }) => (
    <div className="monthHeader">
        <i className="monthHeader-backward fa fa-chevron-left"
            onClick={onMoveBackward}
            >

        </i>
        <span className="monthHeader-title" onClick={onClickTitle}>
        { date.getFullYear() + ' - ' + (date.getMonth() + 1) }
        </span>
        <i className="monthHeader-forward fa fa-chevron-right"
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
