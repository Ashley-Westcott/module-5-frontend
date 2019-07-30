import React from 'react'
import Popup from "reactjs-popup";
import custom from '../custom.css'

export default class AddNewTrip extends React.Component{

state = {
  trip_name: "",
  start_date: "",
  end_date: "",
  traveler_id: this.props.currentTraveler.id,
  currentTraveler: this.props.currentTraveler
}


createTrip = () => {
  fetch("http://localhost:3000/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json",
    },
    body: JSON.stringify(this.state)
  })
  .then(res => res.json())
  .then(() => this.props.rerender())
  .then(this.closeModal())
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.createTrip()
}

openModal = () => {
  this.setState({ open: true });
}

closeModal = () => {
  this.setState({ open: false });
}

render(){
console.log("addnewtrip props", this.props, this.state)
return (
  <div>
    <button class="btn btn-lg btn-primary btn-login text-uppercase font-weight-bold mb-2" onClick={this.openModal}>
      Add New Trip
    </button>
    <Popup
      open={this.state.open}
      closeOnDocumentClick
      onClose={this.closeModal}
    >
      <div className="modalcustom">
        <a className="close" onClick={this.closeModal}>
          &times;
        </a>
        <div className="header"> New Trip </div>
        <div className="content">
          {" "}
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" name="trip_name" value={this.state.trip_name} onChange={this.handleChange} placeholder='Trip Name' />
            <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder='Start Date' />
            <input type="date" name="end_date" value={this.state.end_date} onChange={this.handleChange} placeholder='End Date' />
                  <div className="actions">
                  <button className="button" type="submit">
                  Create Trip
                  </button>
              </div>
          </form>
        </div>
    </div>
    </Popup>
  </div>
    )
  }
}
