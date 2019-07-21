import React from 'react'
import TripDetails from './TripDetails'

export default class Trip extends React.Component{

  state = {
    trip_details:"",
    loading: true
  }

  setDetailsProp = () => {
    if (!this.state.trip_details ){
    this.setState({
      trip_details: this.props.trip.details,
      loading: false
      })
    }
  }


  render(){
    this.setDetailsProp()
    if (!this.state.trip_details) {
    return (
      <img
        alt="loading..."
        className="loader"
        src="https://www.macupdate.com/images/icons256/54019.png"
      />
      );
    }
    this.setDetailsProp()
    if(this.state.trip_details)
    return (
      <div>
      {this.props.trip.trip_name}
      {this.state.trip_details.map(detail => {
            return <TripDetails key={detail.id} detail={detail} /> })
      }
      </div>
    )
  }
}
