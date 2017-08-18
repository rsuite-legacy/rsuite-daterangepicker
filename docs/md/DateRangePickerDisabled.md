```html
<DateRangePicker disabled />
<DateRangePicker
  defaultValue={[moment(), moment().add(10, 'd')]}
  disabledDate={(date) => date.isAfter(moment())}
/>
```
