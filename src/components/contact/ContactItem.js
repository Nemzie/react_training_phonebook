import React from 'react';

const ContactItem = (props) => {
	const {item, handleClick, index} = props;
	return (
		<div className="contact-item-inner">
			<div className="contact-details" onClick={(e) => handleClick('view', index)}>
				<h2 className="contact-item-name">{ item.name }</h2>
				<p className="contact-item-number">{ item.number }</p>
			</div>

			<div className="btn btn-edit" onClick={(e) => handleClick('edit', index)}>
				<i className="ico-edit"></i>
			</div>

			<div className="btn btn-trash" onClick={(e) => handleClick('delete', index)}>
				<i className="ico-trash"></i>
			</div>
			
		</div>
	);
}

export default ContactItem;
