# rsuite-daterangepicker

> 依赖 rsuite & rsuite-theme


Live demo: <https://rsuite.github.io/rsuite-daterangepicker/>

### Usage

```
<DateRangePicker
    defaultStartDate={dateRange[0].toDate()}
    defaultEndDate={dateRange[1].toDate()}
    maxDate={yesterday.toDate()}
    minDate={minDate.toDate()}
    ranges={[
        { label: '最近一周', range: [yesterday.clone().subtract(7, 'd'), yesterday] },
        { label: '最近 30 天', range: [yesterday.clone().subtract(30, 'd'), yesterday] }
    ]}
    onChange={onChangeDateRange}
/>
```

### Properties

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| defaultStartDate | Date | | 默认开始时间 |
| defaultEndDate | Date | | 默认结束时间 |
| maxDate | Date | | 最大可选时间 |
| minDate | Date | | 最小可选时间 |
| ranges | array | [今日, 昨天, 本周, 本月] | 快捷选项 |


### License

MIT
