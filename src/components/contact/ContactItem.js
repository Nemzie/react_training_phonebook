import React from 'react';

const ContactItem = ({ name, number }) => {
	return (
		<div className="contact-item-inner">
			<div className="contact-details">
				<h2 className="contact-item-name">{ name }</h2>
				<p className="contact-item-number">{ number }</p>
			</div>

			<div className="btn btn-edit">
				<i className="ico-edit"></i>
			</div>
			<div className="btn btn-trash">
				<i className="ico-trash"></i>
			</div>
		</div>
	);
}

export default ContactItem;
