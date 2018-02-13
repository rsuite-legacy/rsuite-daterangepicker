### 控制展开与关闭


<!--start-code-->

```js
class DateRangePickerToggle extends React.Component {

  render() {
    return (
      <div className="field">
        <ButtonToolbar style={{ marginBottom: 10 }}>
          <Button
            shape="default"
            onClick={() => {
              this.picker.open();
            }}
          >
            展开
          </Button>
          <Button
            shape="default"
            onClick={() => {
              this.picker.close(true);
            }}
          >
            关闭
          </Button>
        </ButtonToolbar>

        <DateRangePicker
          ref={ref => this.picker = ref}
        />

      </div>
    );
  }
}

ReactDOM.render(<DateRangePickerToggle />);
```
<!--end-code-->
