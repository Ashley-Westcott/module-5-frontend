import React from 'react'
import NavBar from './NavBar'
import TripList from './TripList'

export default class ProfilePage extends React.Component {

  state = {
    profile: ""
  }

  setProfileProp = () => {
    if (this.state.profile === ""){
    let foundUser = this.props.all_traveler_data.find(traveler => traveler.id === this.props.current_traveler.id)
    this.setState({
      profile: foundUser
      })
    }
  }


  render() {
    console.log("profile props", this.props, this.state)
    this.setProfileProp()
    return (
        <div>
        <NavBar />
        <h1>{this.state.profile.firstname} {this.state.profile.lastname}'s Trips</h1>
        <TripList profile={this.state.profile}/>
        </div>
    )
  }
}
