

import React from 'react'
import DeleteDetail from './DeleteDetail'
import EditTripDetails from './EditTripDetails'

export default class Details extends React.Component {
  render(){
    console.log("details component", this.props)
    // debugger
    return(
      <div>
      {this.props.detail
      ?
      <div class="row2">
      <p class="text-muted mb-4 col-9">
        {this.props.detail.google_maps_info}</p>

        <EditTripDetails rerender={this.props.rerender} detail={this.props.detail}/>
        <DeleteDetail rerender={this.props.rerender} detail={this.props.detail}/>
        
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

// {this.props.trip.details.map(detail => {
//   return detail.google_maps_info})}
