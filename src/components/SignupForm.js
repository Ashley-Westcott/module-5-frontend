import React from 'react'

export default class SignupForm extends React.Component {
	state = {
		firstname: "",
    lastname: "",
    birthday: "",
    photo: "",
    email: "",
		username: "",
		password: "",
		passwordConfirmation: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	createUser = () => {
		fetch("http://localhost:3000/travelers", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				alert(response.errors)
			} else {
				localStorage.setItem("token", response.token)
				this.props.setCurrentUser(response.user)
				this.props.history.push(`/travelers/${response.user.id}`)
			}
		})
	}

	handleSubmit = () => {
		if(this.state.password === this.state.passwordConfirmation){
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}

	render(){
      console.log(this.state)
  		return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder='First Name' />
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder='Last Name' />
            <input type="date" name="birthday" value={this.state.birthday} onChange={this.handleChange} placeholder='Birthday' />
            <input type="text" name="photo" value={this.state.photo} onChange={this.handleChange} placeholder='Photo URL' />
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Email Address' />
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder='Username' />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder='Password' />
            <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder='Retype Password' />
            <button type="submit">Sign Up</button>
          </form>
        </div>
		)
	}
}
