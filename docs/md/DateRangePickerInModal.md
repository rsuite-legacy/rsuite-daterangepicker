### 在 Modal 中


<!--start-code-->
```js
class DateRangePickerInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen () {
    this.setState({ showModal: true });
  }
  handleClose () {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className="modal-container">
        <Button onClick={this.handleOpen}>打开</Button>
        <Modal show={this.state.showModal} onHide={this.handleClose} autoResizeHeight={false}>
          <Modal.Header>
            <Modal.Title>DateRangePicker in Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DateRangePicker format="YYYY-MM-DD" />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<DateRangePickerInModal />);
```
<!--end-code-->
