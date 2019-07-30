import React from 'react'
import Popup from "reactjs-popup";

export default class EditTraveler extends React.Component {

  state = {
    open: false,
  	firstname: this.props.currentTraveler.firstname,
    lastname: this.props.currentTraveler.lastname,
    birthday: this.props.currentTraveler.birthday,
    photo: this.props.currentTraveler.photo,
    email: this.props.currentTraveler.email,
    traveler_id: this.props.currentTraveler.id
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e, traveler_id) => {
    e.preventDefault()
    this.editProfile(traveler_id)

  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  editProfile = (traveler_id) => {
		fetch(`http://localhost:3000/travelers/${traveler_id}`, {
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
      <div>
        <button className="button" class="btn btn-info" onClick={this.openModal}>
          Edit Profile
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
            <div className="header"> Profile </div>
            <div className="content">
              {" "}
              <form onSubmit={(e) => this.handleSubmit(e,this.state.traveler_id)}>
              
              <div class="form-group focused">
              <label class="form-control-label" for="input-firstname">First Name</label>
              <input class="form-control form-control-alternative" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder='First Name' />
              </div>


              <div class="form-group focused">
              <label class="form-control-label" for="input-firstname">Last Name</label>
              <input class="form-control form-control-alternative"
              type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder='Last Name' />
              </div>


              <div class="form-group focused">
              <label class="form-control-label" for="input-firstname">Birthday</label>
              <input class="form-control form-control-alternative" type="date" name="birthday" value={this.state.birthday} onChange={this.handleChange} placeholder='Birthday' />
              </div>


              <div class="form-group focused">
              <label class="form-control-label" for="input-firstname">Photo URL</label>
              <input class="form-control form-control-alternative" type="text" name="photo" value={this.state.photo} onChange={this.handleChange} placeholder='Photo URL' />
              </div>


              <div class="form-group focused">
              <label class="form-control-label" for="input-firstname">Email Address</label>
              <input class="form-control form-control-alternative" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Email Address' />
              </div>

                <button
                    class="btn btn-sm btn-default"
                    type="submit"
                  >
                    Edit Traveler
                </button>
              </form>
            </div>
        </div>
        </Popup>
      </div>
      );
    }
  }
