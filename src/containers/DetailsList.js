import React from 'react'
import Details from '../components/Details'
// const TRAVELERS_API = "http://localhost:3000/travelers"

export default class DetailsList extends React.Component{

  render(){
    console.log("details list",this.props)
    return(
      <div>
      {this.props.details
      ?
      <div>
          {this.props.details.map(detail => {return <Details key={detail.id} detail={detail} /> })}
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


//   state = {
//     all_traveler_data: [],
//     traveler_with_trip_details: "",
//     loading: true
//   }
//
//   componentDidMount() {
//     fetch(TRAVELERS_API)
//     .then(response => response.json())
//     // .then(data => console.log('fetch', data))
//     .then(data => this.setState({all_traveler_data:data}, () => {this.setDetails()}))
//     // .then (console.log("after fetch",this.state))
//     // .then(this.setDetails())
//   }
//
//   setDetails = () => {
//     if (this.state.traveler_with_trip_details === ""){
//     let foundTraveler = this.state.all_traveler_data.find(traveler => traveler.id === this.props.currentTraveler.id)
//     console.log('found traveler', foundTraveler)
//     this.setState({
//       traveler_with_trip_details: {...foundTraveler},
//       loading: false
//       })
//     }
//   }
//
//   render(){
//     console.log("in render",this.props, this.state)
//     // this.setDetails()
//     if (!this.state.traveler_with_trip_details) {
//     return (
//         <img
//           alt="loading..."
//           className="loader"
//           src="https://www.macupdate.com/images/icons256/54019.png"
//         />
//       );
//     }
//     console.log("after set details", this.state)
//     if (this.state.traveler_with_trip_details)
//     return (
//       <div>
//         {this.state.traveler_with_trip_details.trips.map(trip =>    {return <Details key={trip.id} trip={trip} /> })
//         }
//       </div>
//         )
//     }
// }





// return(
//   this.state.loading
//   ?
//     <img
//         alt="loading..."
//         src="https://cssauthor.com/wp-content/uploads/2018/06/Silver-Balls-Swinging.gif"
//       />
//   :
//   <div>
//   {this.state.traveler_with_trip_details.trips.map(trip => {
//       return <Details key={trip.id} trip={trip} /> })
//       }
//   </div>
