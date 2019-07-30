import React from "react";
import Popup from "reactjs-popup";
import Autocomplete from 'react-google-autocomplete';

//credit for Autocomplete component - https://github.com/ErrorPro/react-google-autocomplete

export default class AddTripDetails extends React.Component {

  state = {
    open: false,
    google_maps_info: "",
    notes: "",
    trip_id: this.props.trip_id,
    maps:null,
    maps2: null
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
    .then(() => this.props.rerender())
    .then(() => this.resetForm())
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
  }

  resetForm = () => {
    this.setState({
      google_maps_info: "",
      notes: ""})
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

      <div className="modalcustom">
      <div class="col-2 text-right">
        <button className="button" onClick={this.openModal} class="btn btn-sm btn-primary">
          Add Trip Details
        </button>
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modalcustom">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            <div className="header"> Add Trip Detail </div>
            <div className="content">
              {" "}
              <form onSubmit={e => this.handleSubmit(e)}>

              <div class="form-group focused">
              <label class="form-control-label" for="input-google_maps_info">Trip Detail</label>
              <Autocomplete
                  class="form-control form-control-alternative"
                  style={{width: '100%'}}
                  onBlur={(e) => {this.setState({google_maps_info:e.target.value})}}
                  onInput={(e) => {console.log("e input", e.target.value)}}
                  onPlaceSelected={(place) => {this.setState({maps:place.formatted_address})
                    console.log("place",place);
                  }}
                  types={['establishment'&'(cities)']}


                  // componentRestrictions={{country: "ru"}}
              />

              </div>
                <div class="form-group focused">
                <label class="form-control-label" for="input-firstname">Notes</label>
                <input class="form-control form-control-alternative" type="textarea" name="notes" value={this.state.notes} onChange={this.handleChange} placeholder='Notes (optional)' />
                </div>
                  <button
                    className="button"
                    class="btn btn-sm btn-default"
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
// onInput={(e)=> {this.setState({maps:e.target.value}) }}
// <input type="text" name="google_maps_info" value={this.state.google_maps_info} onChange={this.handleChange} placeholder='Detail' />

// <input id="autocomplete" placeholder="Enter your address" type="text" onChange={this.handleChange} />
// <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder='Start Date' />
// <input type="date" name="end_date" value={this.state.end_date} onChange={this.handleChange} placeholder='End Date' />
