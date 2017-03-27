<br>

安装：
```sh
npm install rsuite-daterangepicker --save
```

<br>
引入样式：

```js
import 'rsuite-daterangepicker/lib/less/index.less';
```
示例：
```js
import React from 'react';
import moment from 'moment';
import DateRangePicker from 'rsuite-daterangepicker';

export default () => {
    const today = moment().startOf('day');
    const yesterday = today.clone().subtract(1, 'd');
    return (
        <div className="doc-example">
            <DateRangePicker
                defaultEndDate={new Date}
                defaultStateDate={new Date}
                placement="bottomRight"
                ranges={[
                    { label: '最近一周', range: [yesterday.clone().subtract(7, 'd'), yesterday] },
                    { label: '最近 30 天', range: [yesterday.clone().subtract(30, 'd'), yesterday] }
                ]}
                onChange={(beginDate, endDate) => {
                    console.log(beginDate, endDate);
                }}
            />
        </div>
    );
};

```



