```html
<DateRangePicker hoverRange="week"} />
<DateRangePicker
  hoverRange={date => [date.clone().subtract(1, 'days'), date.clone().add(1, 'days')]}
/>
```
