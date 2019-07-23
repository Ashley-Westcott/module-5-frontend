

import React from 'react'

export default class Details extends React.Component {
  render(){
    console.log("details component", this.props)
    // debugger
    return(
      <li>
        {this.props.detail.google_maps_info}
      </li>
    )
  }
}

// {this.props.trip.details.map(detail => {
//   return detail.google_maps_info})}
