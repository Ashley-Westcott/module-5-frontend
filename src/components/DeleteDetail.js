import React from 'react'

export default class DeleteDetail extends React.Component {

  deleteDetail = (detail_id) => {
    fetch(`http://localhost:3000/details/${detail_id}`, {
      method: "DELETE",
    })

    .then(res => res.json())
    .then(this.props.rerender())
    .then(console.log("this.props after re render", this.props))
  }

  render(){
    console.log("delete detail props", this.props)
    return(
      <div class="text-right">
      <button class="btn btn-sm btn-default" onClick={event => this.deleteDetail(this.props.detail.id)}>Delete</button>
      </div>
    )
  }
}
