import React from 'react'
import TripDetails from './TripDetails'

export default class Trip extends React.Component {
  render(){
    console.log("trip",this.props)
    return (
      <div>
      {this.props.trip.trip_name}
      <TripDetails currentTraveler={this.props.currentTraveler} />
      </div>
    )
  }
}
