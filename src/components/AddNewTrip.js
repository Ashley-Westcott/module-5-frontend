import React from 'react'
import Popup from "reactjs-popup";

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
  .then((response) => {console.log(response)
  })
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

render(){
console.log("addnewtrip props", this.props, this.state)
return (
  <div>
    <Popup trigger={<button className="button"> Add New Trip </button>} modal>
      {close => (
      <div className="modal"  >
        <a className="close" onClick={close} position="top right">
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
  )}
  </Popup>
</div>
    )
  }
}
