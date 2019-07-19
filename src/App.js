import React from 'react';
import LoginPage from './containers/LoginPage'
const API = "http://localhost:3000/travelers"

export default class App extends React.Component {

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => console.log(data))
  }

    render() {
      return (
        <div>
          <LoginPage />
        </div>
        )
    }
}
