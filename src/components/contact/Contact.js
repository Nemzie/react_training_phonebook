import React, { Component } from 'react';
import '../../assets/sass/components/contact.scss';

import ContactItem from './ContactItem';
import Modal from '../modal/Modal.js';
import ContactToolbar from './ContactToolbar.js';

class Contact extends Component {
	constructor(props) {
		super(props)
    this.state = {
      showModal: false,
      eventType: '',
      name: '',
      number: '',
			activeIndex: null,
		  data: [
			  { name: 'Alex', number: '09881234567' },
			  { name: 'Bobby', number: '09329874321' },
			  { name: 'Charlie', number: '09225430011' },
			  { name: 'Dustin', number: '09335553241' }
		  ]
    }

    this.handleClick = this.handleClick.bind(this)
		this.handleInput = this.handleInput.bind(this)
	}

  handleClick (type, index) {
		const {activeIndex, name, number} = this.state;
		let cloned = JSON.parse(JSON.stringify(this.state.data))

		this.setState({eventType: type})

		switch (type) {
			case 'create':
				this.setState({ showModal: !this.state.showModal })
				cloned.push({ name: this.state.name, number: this.state.number})

				this.setState({ data: cloned})

				break;
			case 'update':
				let activeEdit = cloned[activeIndex];
				activeEdit.name = name;
				activeEdit.number = number;

				this.setState({ showModal: !this.state.showModal, data: cloned, name: '', number: '' })

				break;

			case 'delete':
				cloned.splice(index, 1)

				this.setState({ data: cloned, showModal: false})

				break;

			case 'view':
			case 'edit':
				console.log("type", type, index);
				const selected = cloned.filter((item, key) => {
					return key === index
				})

				this.setState({ showModal: !this.state.showModal, name: selected[0].name, number: selected[0].number, activeIndex: index})

				break;
			case 'close':
			case 'add':
			 	this.setState({ showModal: !this.state.showModal, name: '', number: '' })
				break
			default:

		}
  }

	handleInput(data) {
		this.setState({ [data.currentTarget.name]: data.currentTarget.value })
	}


	renderList () {
		return this.state.data.map((item, index) => {
			return (
				<li className="contact-list-item" key={index}>
					<ContactItem
						index={index}
						item={item}
						handleClick={this.handleClick}
					/>
				</li>
			)
		});
	}

	render () {
		const {name, number, eventType, showModal, activeIndex} = this.state;
		return (
			<div className="contact">
        <ContactToolbar
          handleClick= {this.handleClick}
        />
        <ul className="contact-list">
          { this.renderList() }
        </ul>
        <Modal
					eventType = {eventType}
					name = {name}
					number = {number}
					handleInput={this.handleInput}
          handleClick = { this.handleClick }
          showModal = { showModal }
					activeIndex = { activeIndex }
        />
      </div>
		)
	}
}

export default Contact;
