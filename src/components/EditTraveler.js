import React from 'react'
import Popup from "reactjs-popup";

export default class EditTraveler extends React.Component {

  state = {
    open: false,
  	firstname: this.props.currentTraveler.firstname,
    lastname: this.props.currentTraveler.lastname,
    birthday: this.props.currentTraveler.birthday,
    photo: this.props.currentTraveler.photo,
    email: this.props.currentTraveler.email
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
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				alert(response.errors)
			} else {
				localStorage.setItem("token", response.token)
				this.props.setCurrentTraveler(response.traveler)
				this.props.history.push(`/travelers/${response.traveler.id}`)
			}
		})
	}



  render() {
    console.log("edit traveler profile", this.props, this.state)
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Edit Profile
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
  .then((response) => {console.log(response)
  })
}
