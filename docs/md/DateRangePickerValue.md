```html
<DateRangePicker defaultValue={moment()} />
<DateRangePicker
  value={this.state.value}
  onChange={(value) => {
    this.setState({ value });
  }}
/>
```
