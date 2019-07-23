import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './containers/LoginPage'
import ProfilePage from './containers/ProfilePage'
import SignupPage from './containers/SignupPage'


export default class App extends React.Component {

  state = {
    currentTraveler: null
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if(token){
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then (response => response.json())
      .then (response => {
          if (response.errors){
              localStorage.removeItem("traveler_id")
              alert("auto_login",response.errors)
              console.log("auto_login",response)
        } else {
        this.setState({
          currentTraveler: response
          })

        }
      })
    }
  }

  setCurrentTraveler = (data) => {
    this.setState({
      currentTraveler: data
  })
}

  logout = () => {
    this.setState({
      currentTraveler: null
    })
    this.props.history.push("/login")
  }

    render() {
      console.log(this.state)
      return (
        <div>
        <Switch>
              <Route path='/login' render={(routerProps) => {
                return <LoginPage setCurrentTraveler={this.setCurrentTraveler} {...routerProps}/>}} />
                <Route path="/signup" render={(routerProps) => {
  							return <SignupPage setCurrentTraveler={this.setCurrentTraveler} {...routerProps}/>}} />
              <Route path='/travelers/:id' render={(routerProps) => {
                return <ProfilePage currentTraveler={this.state.currentTraveler} logout={this.logout} {...routerProps}/>}} />
          </Switch>
        </div>
        )
    }
}


// {this.state.current_traveler
//   ?
//   <ProfilePage current_traveler={this.state.current_traveler} all_traveler_data={this.state.all_traveler_data} />
//   :
//   <LoginPage handleSubmit={this.handleSubmit} handleChange={this.handleChange} />}


// MyLoginPage = (state) => {
//   return (
//     <LoginPage
//       handleSubmit={this.handleSubmit} handleChange={this.handleChange}
//     />
//   );
// }
//
// MyProfilePage = (state) => {
//   return (
//     <ProfilePage
//       current_traveler={this.state.current_traveler} all_traveler_data={this.state.all_traveler_data}
//     />
//   );
// }
