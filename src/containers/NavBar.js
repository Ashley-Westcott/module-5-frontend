import React from 'react'
import AddNewTrip from '../components/AddNewTrip'


export default class NavBar extends React.Component{
render(){
  return(
    <div>
    <AddNewTrip currentTraveler={this.props.currentTraveler}/>
    <button onClick={this.props.logout}>Log Out </button>
  </div>
    )
  }
}
