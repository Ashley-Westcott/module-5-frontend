import React from 'react'
import NavBar from './NavBar'
import TripList from './TripList'

export default class ProfilePage extends React.Component {

  render() {
    console.log("profile props", this.props, this.state)

    return (
        <div>
        {this.props.currentTraveler
          ?   <div><NavBar currentTraveler={this.props.currentTraveler} logout={this.logout}/>
          <img src={this.props.currentTraveler.photo} alt="profile"/>
          <h1>{this.props.currentTraveler.firstname} {this.props.currentTraveler.lastname}'s Trips</h1>
          <TripList currentTraveler={this.props.currentTraveler}/></div>
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
