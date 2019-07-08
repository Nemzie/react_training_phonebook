import React, { Component } from 'react';

class Modal extends Component {
	render() {
    const {name, number, handleClick, handleInput, eventType, activeIndex} = this.props;
    return (
  		<div className={this.props.showModal? 'modal is-show' : 'modal' }>
        <div className="modal-inner">
          <div className="modal-head">
            <span>{this.props.eventType === 'view' ? '' : this.props.eventType } Contact {this.props.eventType === 'view' ? 'Details' : ''}</span>
            <div className="btn btn-close" onClick={(e) => handleClick('close')}>
              <i className="ico-close"></i>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-detail">
              <div className="modal-detail-item">
                <span className="modal-lbl">Name:</span>
                <div className="modal-value">
                  { eventType === 'view'
                    ? <span> {name}</span> : <input type="text" ref="name" name="name" value={name} onChange={handleInput} />
                  }
                </div>
              </div>
              <div className="modal-detail-item">
                <span className="modal-lbl">Number:</span>
                <div className="modal-value">
                  { eventType === 'view'
                    ? <span> {number}</span> :  <input type="text" ref="number" name="number" value={number} onChange={handleInput}  />
                  }
                </div>
              </div>
            </div>
            {
              eventType !== 'view'
              ? <div className="btn btn-save" onClick={(e) => handleClick(eventType === 'edit'? 'update' : 'create')}>
                <span>{eventType === 'edit'? 'update' : 'save'}</span>
              </div> : null
            }

            {
              eventType === 'view'
              ? <div className="btn btn-save" onClick={(e) => handleClick('delete', activeIndex)}>
                <span>delete</span>
              </div> : null
            }

      		</div>
        </div>
  		</div>
  	);
  }
}

export default Modal;
