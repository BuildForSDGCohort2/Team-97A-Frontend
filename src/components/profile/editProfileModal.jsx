import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";

class EditModal extends Component {
  render() {
    return this.props.visible ? (
      <div className="edit-page">
        <div className="edit-modal">
          <img
            onClick={this.props.onClose}
            src={closeIcon}
            alt="close"
            className="close"
          />
          {this.props.children}
        </div>
      </div>
    ) : null;
  }
}

export default EditModal;
