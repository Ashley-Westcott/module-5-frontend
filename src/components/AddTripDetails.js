import React from "react";
import Popup from "reactjs-popup";

export default class AddTripDetails extends React.Component {

  state = {
    open: false,
    google_maps_info: "",
    notes: "",
    trip_id: this.props.trip_id
  }

  addDetail = () => {
    fetch("http://localhost:3000/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(this.closeModal())
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addDetail()
    this.props.rerender()
  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  render() {
    console.log("edit trip details", this.props, this.state)
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Add Trip Details
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            <div className="header"> Trip Details </div>
            <div className="content">
              {" "}
              <form onSubmit={e => this.handleSubmit(e)}>
                <input type="text" name="google_maps_info" value={this.state.google_maps_info} onChange={this.handleChange} placeholder='Detail' />
                <input type="textarea" name="notes" value={this.state.notes} onChange={this.handleChange} placeholder='Notes (optional)' />
                  <button
                    className="button"
                    type="submit"
                  >
                    Add Detail
                </button>
              </form>
            </div>
        </div>
        </Popup>
      </div>
    );
  }
}
