import React, { Component } from 'react';
import '../../assets/sass/components/contact.scss';

import ContactItem from './ContactItem';
import Modal from './Modal.js';
import ContactToolbar from './ContactToolbar.js';

class Contact extends Component {
	constructor(props) {
		super(props)

    this.state = {
      showModal: false,
      inputNumberValue: '',
      modalType: '',
      clickTrigger: false,
      name: '',
      number: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.createContact = this.createContact.bind(this)
	}

  handleClick (type) {
    this.setState({ showModal: !this.state.showModal })


    console.log("click");
  }


  modal () {
    this.setState({ showModal: true })
  }

  createContact (data) {
    let cloned = JSON.parse(JSON.stringify(this.props.list))

    console.log("crash", cloned)
  }


	renderList () {
		return this.props.list.map((item, index) => {
			return (
				<li className="contact-list-item" key={index} onClick={(e) => this.createContact()}>
					<ContactItem {...item} />
				</li>
			)
		});
	}

	render () {
		return (
			<div className="contact">
        <ContactToolbar
          handleClick= {this.handleClick}
        />
        <ul className="contact-list">
          { this.renderList() }
        </ul>
        <Modal
          handleClick = { this.handleClick }
          createContact = { this.createContact }
          showModal = { this.state.showModal }
        />
      </div>
		)
	}
}

export default Contact;
