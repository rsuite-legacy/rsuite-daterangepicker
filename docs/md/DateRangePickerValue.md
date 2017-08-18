```html
<DateRangePicker defaultValue={[moment('2017-02-01'), moment('2017-05-20')]} />
<DateRangePicker
  value={this.state.value}
  onChange={(value) => {
    this.setState({ value });
  }}
/>
```
