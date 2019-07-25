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
        <div>
          <form onSubmit={e =>this.handleSubmit(e)}>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p> Don't have an account? <a href="/signup">Sign up now</a>. </p>
        </div>
  		)
  	}
  }



//   render(){
//     console.log(this.state)
//     return(
//       <div>
//         <form onSubmit={event => this.props.handleSubmit(event)}>
//           <input type="text" name="username" value={this.props.username} onChange={this.props.handleChange} />
//           <input type="text" name="password" value={this.props.password} onChange={this.props.handleChange} />
//           <button type="submit">Login</button>
//         </form>
//         <p>Don't have an account? <a href="/signup">Sign up now</a>. </p>
//       </div>
//     )
//   }
// }
