import React from 'react'


export default class LoginForm extends React.Component {


  render(){
    console.log(this.state)
    return(
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input type="text" name="username" value={this.props.username} onChange={this.props.handleChange} />
          <input type="text" name="password" value={this.props.password} onChange={this.props.handleChange} />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign up now</a>. </p>
      </div>
    )
  }
}
