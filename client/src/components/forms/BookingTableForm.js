import React, { Component } from 'react';
import "../../containers/PageContainer";
import "../../index.css";


class BookingTableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      numPeople: '',
      phoneNumber: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleNumOfPeopleChange = this.handleNumOfPeopleChange.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }

  handleTimeChange(e) {
    this.setState({ time: e.target.value });
  }

  handleNumOfPeopleChange(e) {
    this.setState({ numPeople: e.target.value });
  }

  handlePhoneNumber(e){
    this.setState({phoneNumber: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newBookingTable = {
      date: this.state.date,
      time: this.state.time,
      numPeople: this.state.numPeople
    };
    this.props.handleBookingTableSubmit(newBookingTable);
    this.setState({ date: '', time: '', numPeople: '' });
  }

  render() {
    return (
      <form className="booking-table-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="date"
          placeholder="Date of booking"
          value={this.state.date}
          onChange={this.handleDateChange}
        />

        <input
          type="time"
          placeholder="Time of booking"
          value={this.state.time}
          onChange={this.handleTimeChange}
        />
        <input
          type="text"
          placeholder="Number of people booking"
          value={this.state.numPeople}
          onChange={this.handleNumOfPeopleChange}
        />

        <input
        type="text"
        placeholder="Phone Number"
        value={this.state.phoneNumber}
        onChange={this.handlePhoneNumber}
        />

        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default BookingTableForm;
