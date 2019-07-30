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

	createTraveler = () => {
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
				this.props.setCurrentTraveler(response.traveler)
				this.props.history.push(`/travelers/${response.traveler.id}`)
			}
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if(this.state.password === this.state.passwordConfirmation){
			this.createTraveler()
		} else {
			alert("Passwords don't match!")
		}
	}

	render(){
      console.log("signupform", this.state, this.props)
  		return (

				<div class="container-fluid">
					<div class="row no-gutter">
								<div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
						<div class="col-md-8 col-lg-6">
							<div class="login d-flex align-items-center py-5">
								<div class="container">
									<div class="row">
										<div class="col-md-9 col-lg-8 mx-auto">
											<h3 class="login-heading mb-4">Create your account</h3>
											<form onSubmit={e => this.handleSubmit(e)}>

												<div class="form-label-group">
													<input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder='First Name' class="form-control" id="inputEmail" required autofocus/>
													<label for="inputEmail">First Name</label>
												</div>

												<div class="form-label-group">
													<input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder='Last Name' class="form-control" id="inputEmail" required autofocus/>
													<label for="inputEmail">Last Name</label>
												</div>

												<div class="form-label-group">
													<input type="date" name="birthday" value={this.state.birthday} onChange={this.handleChange} placeholder='Birthday' class="form-control" id="inputEmail" required autofocus/>
													<label for="inputEmail">Birthday</label>
												</div>

												<div class="form-label-group">
													<input type="text" name="photo" value={this.state.photo} onChange={this.handleChange} placeholder='Photo URL' class="form-control" id="inputEmail" required autofocus/>
													<label for="inputEmail">Profile Picture URL</label>
												</div>

												<div class="form-label-group">
													<input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Email Address' class="form-control" id="inputEmail" required autofocus/>
													<label for="inputEmail">Email Address</label>
												</div>

												<div class="form-label-group">
													<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder='Username' class="form-control" id="inputEmail" required autofocus/>
													<label for="inputEmail">Username</label>
												</div>

												<div class="form-label-group">
													<input name="password" value={this.state.password} onChange={this.handleChange} type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
													<label for="inputPassword">Password</label>
												</div>

												<div class="form-label-group">
													<input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder='Retype Password' id="inputPassword" class="form-control" placeholder="Password" required/>
													<label for="inputPassword">Retype Password</label>
												</div>

												<button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign Up</button>
												<div class="text-center">
													<a class="small"> Already have an account? </a>
													<a class="small" href="/login">Log in now</a>.</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>




		)
	}
}


// <div>
// 	<form onSubmit={e => this.handleSubmit(e)}>
// 		<input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder='First Name' />
// 		<input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder='Last Name' />
// 		<input type="date" name="birthday" value={this.state.birthday} onChange={this.handleChange} placeholder='Birthday' />
// 		<input type="text" name="photo" value={this.state.photo} onChange={this.handleChange} placeholder='Photo URL' />
// 		<input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Email Address' />
// 		<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder='Username' />
// 		<input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder='Password' />
// 		<input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder='Retype Password' />
// 		<button type="submit">Sign Up</button>
// 	</form>
// </div>
