import React from 'react'
import Trip from '../components/Trip'

export default class TripList extends React.Component {

render() {
    console.log("triplist", this.props)
      return (
          <div>
          {this.props.currentTraveler.trips.map(trip => {
                return <Trip key={trip.id} trip={trip} currentTraveler={this.props.currentTraveler} rerender={this.props.rerender} /> })
          }
          </div>
        )
      }
}

// </div>
// :
// <img
//        alt="loading"
//        src="https://cssauthor.com/wp-content/uploads/2018/06/Silver-Balls-Swinging.gif"
//  />
// }

//
// render(){
//   // this.setTripsProp()
//   console.log("triplist", this.props.profile.trips)
//   return(
//     <div>
//     {this.props
//     ?
//     this.props.profile.trips.map(trip => {
//             return <Trip key={trip.id} trip={trip}/> })
//     :
//     <img
//         alt="loading..."
//         className="loader"
//         src="https://www.macupdate.com/images/icons256/54019.png"
//       />
//     }
//     </div>
//   )
// }
