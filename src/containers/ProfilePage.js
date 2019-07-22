import React from 'react'
import NavBar from './NavBar'
import TripList from './TripList'

export default class ProfilePage extends React.Component {

  render() {
    console.log("profile props", this.props, this.state)

    return (
        <div>
        <NavBar />
        <h1>{this.props.currentTraveler.firstname} {this.props.currentTraveler.lastname}'s Trips</h1>
        <TripList currentTraveler={this.props.currentTraveler}/>
        </div>
    )
  }
}
