```html
<DateRangePicker disabled />
<DateRangePicker
  defaultValue={[moment(), moment().add(10, 'd')]}
  disabledDate={(date) => date.isAfter(moment())}
/>
<DateRangePicker
  disabledDate={(date, selectValue, selectedDone, type) => {
    if (date.isAfter(moment(), 'd')) {
      return true;
    }
    if (type === Type.CALENDAR && selectValue && selectValue[0] && !selectedDone && (
      selectValue[0].clone().add(-5, 'd').isAfter(date, 'd') ||
      selectValue[0].clone().add(5, 'd').isBefore(date, 'd')
    )) {
      return true;
    }
    return false;
  }}
/>
```
disabledDate  参数说明:

- `date`: moment 对象，需要验证的日期
- `selectValue`: 选择的值，是一个 array， [beginDate,endDate]
- `selectedDone`: boolean 类型，是否选择完成，如果为 true, 表示开始和结束时间都选择了。
- `type`:  string 类型， 包括 `CALENDAR`,`TOOLBAR_BUTTON_OK`,`TOOLBAR_SHORTCUT` 分别标识需要禁用的位置
