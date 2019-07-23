import React from 'react'
import DetailsList from '../containers/DetailsList'

export default class Trip extends React.Component {
  render(){
    console.log("trip",this.props)
    return (
      <div>
      {this.props.trip.trip_name}
      <DetailsList details={this.props.trip.details} />
      </div>
    )
  }
}
