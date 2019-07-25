import React from 'react'
import Popup from "reactjs-popup";

export default class EditTraveler extends React.Component {

  state = {
    open: false,
  	firstname: this.props.currentTraveler.firstname,
    lastname: this.props.currentTraveler.lastname,
    birthday: this.props.currentTraveler.birthday,
    photo: this.props.currentTraveler.photo,
    email: this.props.currentTraveler.email,
    traveler_id: this.props.currentTraveler.id
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e, traveler_id) => {
    e.preventDefault()
    this.editProfile(traveler_id)
    console.log("after reset state", this.state)
  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  editProfile = (traveler_id) => {

		fetch(`http://localhost:3000/travelers/${traveler_id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify({firstname: this.state.firstname})
		})
    .then(this.closeModal())
    .then(this.props.rerender())

    //   response => response.json())
    // .then(data => ("response", console.log(data)))
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));

    }

  render() {
    console.log("edit traveler profile", "props", this.props, "state", this.state)
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Edit Profile
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            <div className="header"> Profile </div>
            <div className="content">
              {" "}
              <form onSubmit={(e) => this.handleSubmit(e,this.state.traveler_id)}>
              <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder='First Name' />
              <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder='Last Name' />
              <input type="date" name="birthday" value={this.state.birthday} onChange={this.handleChange} placeholder='Birthday' />
              <input type="text" name="photo" value={this.state.photo} onChange={this.handleChange} placeholder='Photo URL' />
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Email Address' />
                <button
                    className="button"
                    type="submit"
                  >
                    Edit Traveler
                </button>
              </form>
            </div>
        </div>
        </Popup>
      </div>
      );
    }
  }


//
//
// addDetail = () => {
//   fetch("http://localhost:3000/details", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accepts": "application/json",
//     },
//     body: JSON.stringify(this.state)
//   })
//   .then(res => res.json())
//   .then((response) => {console.log(response)
//   })
// }


  // function editThatPokemon(e){
  // 		// console.log(e.target);
  // 		// here we're finding the pokemon in the original array that matches
  // 		// the pokemon we want to edit
  // 		// we need to change the e.target.id into an integer so we parseInt before
  // 		// we compare to each of the pokemon's ids
  // 		let detailToUpdate = pokeArray.find(pokemon => pokemon.id === parseInt(e.target.id))
  // 		// console.log('foundpoke', foundPoke);
  // 		// here we're grabbing the index of the foundpoke in the original array
  // 		// we NEED TO DO THIS BEFORE WE SEND OUR PATCH
  // 		// so that we can switch the edited pokemon on the DOM
  // 		// and keep it's place in the array
  // 		let foundPokeIndex = parseInt(pokeArray.indexOf(foundPoke))
  // 		// console.log(foundPokeIndex);
  // 		// here we're going to grab all of the values of the edit form
  // 		// BUT WE CANNOT DO THIS UNTIL THE FORM IS ADDED TO THE DOM *** //
  // 		let editPokeName = e.target.parentElement[0].value
  // 		let editPokeFront = e.target.parentElement[1].value
  // 		let editPokeBack = e.target.parentElement[2].value
  // 		// console.log(editPokeName, editPokeFront, editPokeBack);
  // 		// here we're sending our PATCH request with the edited values
  // 		fetch(`${pokeURL}/${e.target.id}`, {
  // 			method: "PATCH",
  // 			headers: {
  // 				"Content-Type": "application/json",
  // 				"Accept": "application/json"
  // 			},
  // 			body: JSON.stringify({
  // 				name: editPokeName,
  // 				sprites: {
  // 					front: editPokeFront,
  // 					back: editPokeBack
  // 				}
  // 			})
  // 		})
  // 		.then(res => res.json())
  // 		.then(editedPoke => {
  // 			// console.log(editedPoke)
  // 			// here we're going to update our local variable and replace the
  // 			// original pokemon with your edited pokemon that we got back
  // 			// from the fetch
  // 			pokeArray[foundPokeIndex] = editedPoke
  // 			// console.log(foundPokeIndex)
  // 			// then we're going to render all of our pokemon on the DOM
  // 			let newPokeHTML = pokeArray.map(pokemon => {
  // 				return renderSinglePokemon(pokemon)
  // 			})
  // 			// console.log(newPokeHTML)
  // 			// console.log(pokeContainer)
  // 			pokeContainer.innerHTML = newPokeHTML.join("")
  // 		})
  // 	}
