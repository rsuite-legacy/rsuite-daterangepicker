# rsuite-daterangepicker

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

### License

MIT
