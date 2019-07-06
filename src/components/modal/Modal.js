import React, { Component } from 'react';

class Modal extends Component {
	render() {
    const {name, number, handleClick, handleInput, eventType} = this.props;
    return (
  		<div className={this.props.showModal? 'modal is-show' : 'modal' }>
        <div className="modal-inner">
          <div className="modal-head">
            <span>{this.props.eventType} Contact</span>
            <div className="btn btn-close" onClick={(e) => handleClick('close')}>
              <i className="ico-close"></i>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-detail">
              <div className="modal-detail-item">
                <span className="modal-lbl">Name:</span>
                <span className="modal-input"><input type="text" ref="name" name="name" value={name} onChange={handleInput} /></span>
              </div>
              <div className="modal-detail-item">
                <span className="modal-lbl">Number:</span>
                <span className="modal-input"><input type="text" ref="number" name="number" value={number} onChange={handleInput}  /></span>
              </div>
            </div>
            {
              eventType === 'add'
              ? <div className="btn btn-save" onClick={(e) => handleClick('create')} > <span>Save</span> </div> : null
            }

            {
              eventType === 'edit'
              ? <div className="btn btn-save" onClick={(e) => handleClick('update')}>
                <span>update</span>
              </div> : null
            }


      		</div>
        </div>
  		</div>
  	);
  }
}

export default Modal;
