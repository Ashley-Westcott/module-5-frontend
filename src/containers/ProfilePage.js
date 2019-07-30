import React from 'react'
import NavBar from './NavBar'
import TripList from './TripList'
import EditTraveler from '../components/EditTraveler'
import DeleteTraveler from '../components/DeleteTraveler'
import Styling from './Styling'

export default class ProfilePage extends React.Component {

  render() {
    console.log("profile props", this.props, this.state)
    return (
      <div>
      {this.props.currentTraveler
        ?
        <div><NavBar rerender={this.props.rerender} currentTraveler={this.props.currentTraveler} logout={this.props.logout} history={this.props.history}/>
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

// <TripList rerender={this.props.rerender} currentTraveler={this.props.currentTraveler} />
// <EditTraveler rerender={this.props.rerender} currentTraveler={this.props.currentTraveler} />
// <DeleteTraveler history={this.props.history} currentTraveler={this.props.currentTraveler} />
