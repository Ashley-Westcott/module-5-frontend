

import React from 'react'
import DeleteDetail from './DeleteDetail'

export default class Details extends React.Component {
  render(){
    console.log("details component", this.props)
    // debugger
    return(
      <div>
      {this.props.detail
      ?
      <li>
        {this.props.detail.google_maps_info}
        <DeleteDetail rerender={this.props.rerender} detail={this.props.detail}/>
      </li>
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
