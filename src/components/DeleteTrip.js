import React from 'react'

export default class DeleteTrip extends React.Component {

  deleteTrip = (trip_id) => {
    const confirm = window.confirm('Are you sure you want to delete your trip? This action cannot be undone.');
    if(confirm)
    fetch(`http://localhost:3000/trips/${trip_id}`, {
      method: "DELETE",
    })

    .then(res => res.json())
    .then(()=>this.props.rerender())
    .then(console.log("this.props after re render", this.props))

  }

  render(){
    console.log("delete trip props", this.props)
    return(
      <div class="text-right">
      <button class="btn btn-sm btn-default" onClick={event => this.deleteTrip(this.props.trip_id)}>Delete Trip</button>
      </div>
    )
  }
}
