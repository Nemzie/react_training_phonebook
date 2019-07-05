import React from 'react';

const Modal = () => {
  const showHideClassName = show ? "is-show" : "is-hide";

  return (
    <div className="modal">
      <div className="modal-inner">
        <div className="modal-head">

        </div>
        <div className="modal-body">
          <div className="modal-data">
            <span>Name:</span>
            <span>lalal</span>
          </div>
          <div className="modal-data">
            <span>Number:</span>
            <span>021212</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal;
