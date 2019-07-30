import React from 'react'
import DetailsList from '../containers/DetailsList'
import AddTripDetails from '../components/AddTripDetails'
import DeleteTrip from './DeleteTrip'

export default class Trip extends React.Component {

  render(){
    console.log("trip",this.props)
    return (
      <div>
      {this.props.trip
      ?
      <div class="row">
      <div id="accordion">
        <button id="headingOne" class="btn btn-sm" data-toggle="collapse" data-target={"#"+this.props.trip.trip_name} aria-expanded="true" aria-controls="collapseOne">
          +
        </button>
    </div>
      <h3 class="heading text-muted mb-4 col-8">{this.props.trip.trip_name}</h3>
      <AddTripDetails rerender={this.props.rerender} currentTraveler={this.props.currentTraveler} trip_id={this.props.trip.id} />
      <DeleteTrip rerender={this.props.rerender} currentTraveler={this.props.currentTraveler} trip_id={this.props.trip.id} />
      <DetailsList rerender={this.props.rerender} details={this.props.trip.details} trip_name={this.props.trip.trip_name} />
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
