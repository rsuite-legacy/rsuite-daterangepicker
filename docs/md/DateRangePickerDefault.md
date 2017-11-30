### 默认


<!--start-code-->
```js

const DateRangePickerDefault = props => (
  <div className="field">

    <DateRangePicker format="YYYY-MM-DD" />
    <p>- 设置右对齐 <code>align="right"</code> </p>
    <DateRangePicker format="YYYY-MM-DD" align="right" />
    <p>- 设置默认值</p>
    <DateRangePicker defaultValue={[moment(), moment().add(5, 'd')]} />
  </div>
);

ReactDOM.render(<DateRangePickerDefault />);
```
<!--end-code-->

