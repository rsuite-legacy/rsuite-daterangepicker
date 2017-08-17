```html
<DateRangePicker disabled />
<DateRangePicker
  disabledDate={(date) => date.isAfter(moment())}
/>
<DateRangePicker
  format="HH:mm:ss"
  ranges={[]}
  defaultValue={moment('2017-12-12 09:15:30')}
  disabledHours={(hour) => hour < 8 || hour > 18}
  disabledMinutes={(minute) => minute % 15 !== 0}
  disabledSeconds={(second) => second % 30 !== 0}
/>
<DateRangePicker
  format="HH:mm:ss"
  ranges={[]}
  defaultValue={moment('2017-12-12 09:15:30')}
  hideHours={(hour) => hour < 8 || hour > 18}
  hideMinutes={(minute) => minute % 15 !== 0}
  hideSeconds={(second) => second % 30 !== 0}
/>
```
