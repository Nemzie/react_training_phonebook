import React, { Component } from 'react';

class ContactToolbar extends Component {
	constructor(props) {
		super(props);
	}

	create

	render () {
		return (
			<div className="contact-head">
        <h1> <i className="ico-contact"> </i><span>Contact List</span> </h1>

        <div className="btn btn-create" onClick={(e) => this.props.handleClick('add')}>
          <i className="ico-create"></i>
        </div>

      </div>
		)
	}
}

export default ContactToolbar;
