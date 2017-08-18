```html
<DateRangePicker
  ranges={[{
    label: '今天',
    value: [moment(), moment()]
  }, {
    label: '昨天',
    value: [moment().add(-1, 'd'), moment().add(-1, 'd')]
  }, {
    label: '最近 7 天',
    value: [moment().subtract(6, 'days'), moment()]
  }]}
/>
```
