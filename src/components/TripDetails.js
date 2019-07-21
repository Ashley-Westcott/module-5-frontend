import React from 'react'

export default class TripDetails extends React.Component{
  render(){
    console.log('trip details', this.props)
    return(
      <div>
      {this.props.detail.google_maps_info}
      </div>
    )
  }
}
