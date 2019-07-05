import React, { Component } from 'react';

class Modal extends Component {

  getInitialState () {
    let data = {
      name: '',
      number: ''
    }
    return {
      name: this.props.name || "",
      number: this.props.number || "" 
    }

  }

	render() {
    return (
  		<div className={this.props.showModal? 'modal is-show' : 'modal' }>
        <div className="modal-inner">
          <div className="modal-head">
            <span>Contact</span>
            <div className="btn btn-close" onClick={(e) => this.props.handleClick('close')}>
              <i className="ico-close"></i>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-detail">
              <div className="modal-detail-item">
                <span className="modal-lbl">Name:</span>
                <span className="modal-input"><input type="text" ref="name" name="name" /></span>
              </div>
              <div className="modal-detail-item">
                <span className="modal-lbl">Number:</span>
                <span className="modal-input"><input type="text" ref="number" name="number"/></span>
              </div>
            </div>

            <div className="btn btn-save" onClick={(e) => this.getData()}>
              <span>create</span>
            </div>
      		</div>
        </div>
  		</div>
  	);
  }
}

export default Modal;
