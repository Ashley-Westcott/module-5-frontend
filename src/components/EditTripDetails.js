import React from 'react'
import Popup from "reactjs-popup";
import Autocomplete from 'react-google-autocomplete';

export default class EditTripDetails extends React.Component {

  state = {
    open: false,
    google_maps_info: this.props.detail.google_maps_info,
    notes: this.props.detail.notes,
    detail_id: this.props.detail.id
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e, detail_id) => {
    e.preventDefault()
    this.editDetail(detail_id)
  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  editDetail = (detail_id) => {
		fetch(`http://localhost:3000/details/${detail_id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
    .then (response => response.json())
    .then(()=>this.props.rerender())
    .then(this.closeModal())
    }

  render() {
    console.log("edit traveler profile", "props", this.props, "state", this.state)
    return (
      <div className="modalcustom">
      <div class="col-2 text-right">
        <button className="button" class="btn btn-sm btn-info"  onClick={this.openModal}>
          Edit 
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
            <div className="header"> Edit Detail </div>
            <div className="content">
              {" "}
              <form onSubmit={(e) => this.handleSubmit(e,this.state.detail_id)}>
              <div class="form-group focused">
              <label class="form-control-label" for="input-google_maps_info">Trip Detail</label>
              <Autocomplete
                  class="form-control form-control-alternative"
                  placeholder={this.state.google_maps_info}
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
              <input class="form-control form-control-alternative" type="text" name="notes" value={this.state.notes} onChange={this.handleChange} placeholder='Notes' />
              </div>
                <button
                    className="button"
                    class="btn btn-sm btn-default"
                    type="submit"
                  >
                    Edit Detail
                </button>
              </form>
            </div>
        </div>
        </Popup>
      </div>
      );
    }
  }


// <input class="form-control form-control-alternative" type="text" name="google_maps_info" value={this.state.google_maps_info} onChange={this.handleChange} placeholder='Detail' />
