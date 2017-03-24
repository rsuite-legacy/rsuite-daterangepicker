import React from 'react';
import DateRangePicker from '../../src';

export default () => {
    return (
        <div className="doc-example">
            <DateRangePicker
                defaultEndDate={new Date}
                defaultStateDate={new Date}
            />
        </div>
    );
};
