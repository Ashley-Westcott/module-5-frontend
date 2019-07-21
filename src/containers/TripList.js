import React from 'react'
import Trip from '../components/Trip'

export default class TripList extends React.Component {


state = {
  trips:"",
  loading: true
}

setTripsProp = () => {
  if (!this.state.trips ){
  this.setState({
    trips: this.props.profile.trips,
    loading: false
    })
  }
}

render() {
  this.setTripsProp()
    if (!this.state.trips) {
      return (
        <img
          alt="loading..."
          className="loader"
          src="https://www.macupdate.com/images/icons256/54019.png"
        />
        );
      }
      this.setTripsProp()
      console.log("after state", this.state, this.props)
      if(this.state.trips)
      return (
          <div>
          {this.state.trips.map(trip => {
                return <Trip key={trip.id} trip={trip} /> })
          }
          </div>
        )
        console.log("last state", this.state, this.props)
  }
}



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
