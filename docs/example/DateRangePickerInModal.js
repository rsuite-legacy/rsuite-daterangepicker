import React from 'react';
import { Modal, Button } from 'rsuite';
import DateRangePicker from '../../src';

class DateRangePickerInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  handleOpen = () => {
    this.setState({
      showModal: true
    });
  }
  handleClose = () => {
    this.setState({
      showModal: false
    });
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

export default DateRangePickerInModal;

