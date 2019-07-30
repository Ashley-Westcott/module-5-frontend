import React from 'react'

export default class LoginForm extends React.Component {

  state = {
  		username: "",
  		password: "",
  	}

  	handleChange = (event) => {
  		this.setState({
  			[event.target.name]: event.target.value
  		})
  	}

  	handleSubmit = (e) => {
      e.preventDefault()
  		fetch("http://localhost:3000/login", {
  			method: "POST",
  			headers: {
  				"Content-Type": "application/json",
  				"Accept": "application/json"
  			},
        mode: "cors",
        body: JSON.stringify(this.state)
  		})
  		.then(res => res.json())
  		.then(response => {
  			if (response.errors) {
  				alert(response.errors)
  			} else {
          console.log("post",response)
  				localStorage.setItem("token", response.token)
  				this.props.setCurrentTraveler(response.traveler)
  				this.props.history.push(`/travelers/${response.traveler.id}`)
  			}
  		})
  	}

  	render(){
      console.log("loginform", this.state, this.props)
  		return (


  <div class="container-fluid">
    <div class="row no-gutter">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Welcome back!</h3>
                <form onSubmit={e =>this.handleSubmit(e)}>
                  <div class="form-label-group">
                    <input name="username" value={this.state.username} onChange={this.handleChange} type="text" id="inputEmail" class="form-control" placeholder="Username" required autofocus/>
                    <label for="inputEmail">Username</label>
                  </div>

                  <div class="form-label-group">
                    <input name="password" value={this.state.password} onChange={this.handleChange} type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                    <label for="inputPassword">Password</label>
                  </div>

                  <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                  <div class="text-center">
                    <a class="small"> Don't have an account? </a>
                    <a class="small" href="/signup">Sign up now</a>.</div>
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
  //   <form onSubmit={e =>this.handleSubmit(e)}>
  //     <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
  //     <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
  //     <button type="submit">Login</button>
  //   </form>
  //   <p> Don't have an account? <a href="/signup">Sign up now</a>. </p>
  // </div>
