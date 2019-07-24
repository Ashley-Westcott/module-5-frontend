import React from 'react'
import DetailsList from '../containers/DetailsList'
import AddTripDetails from '../components/AddTripDetails'

export default class Trip extends React.Component {

  render(){
    console.log("trip",this.props)
    return (
      <div>
      {this.props.trip
      ?
      <div>
      {this.props.trip.trip_name}
      
      <AddTripDetails currentTraveler={this.props.currentTraveler} trip_id={this.props.trip.id} />
      <DetailsList details={this.props.trip.details} />
      </div>
      :
      <img
          alt="loading"
          src="https://cssauthor.com/wp-content/uploads/2018/06/Silver-Balls-Swinging.gif"
      />
      }
      </div>
    )
  }
}
