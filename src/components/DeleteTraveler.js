import React from 'react'

export default class DeleteTraveler extends React.Component {

  deleteTraveler = (traveler_id) => {
    const confirm = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if(confirm)
    fetch(`http://localhost:3000/travelers/${traveler_id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then((response) => {
      this.props.history.push(`/login`)
    })
  }

  render(){
    return(
      <button class="btn btn-sm btn-default float-center" onClick={event => this.deleteTraveler(this.props.currentTraveler.id)}>Delete Profile</button>
    )
  }
}
