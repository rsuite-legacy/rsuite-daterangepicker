```html
<DateRangePicker disabled />
<DateRangePicker
  defaultValue={[moment(), moment().add(10, 'd')]}
  disabledDate={(date) => date.isAfter(moment())}
/>
<DateRangePicker
  disabledDate={(date, selectValue, selectedDone) => {
    if (date.isAfter(moment(), 'd')) {
      return true;
    }
    if (selectValue && selectValue[0] && !selectedDone && (
      selectValue[0].clone().add(-5, 'd').isAfter(date, 'd') ||
      selectValue[0].clone().add(5, 'd').isBefore(date, 'd')
    )) {
      return true;
    }
    return false;
  }}
/>
```
