import React from 'react'
import AddNewTrip from '../components/AddNewTrip'
import EditTraveler from '../components/EditTraveler'
import DeleteTraveler from '../components/DeleteTraveler'
import TripList from './TripList'



export default class NavBar extends React.Component{
render(){
  return(
    <body>
    <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1"><AddNewTrip rerender={this.props.rerender} currentTraveler={this.props.currentTraveler}/></span>
      <button class="btn btn-lg btn-primary btn-login text-uppercase font-weight-bold mb-2" onClick={this.props.logout}>Log Out </button>
      </div>
    </nav>
    <div>
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" styling="min-height: 600px; background-image: url(https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
              <span class="mask bg-gradient-default opacity-8"></span>
                <div class="container-fluid d-flex align-items-center">
                  <div class="row">
                    <div class="col-lg-7 col-md-10">
                    <h1 class="display-2 text-white">Hi {this.props.currentTraveler.firstname}!</h1>
                    <p class="text-white mt-0 mb-5">Take a look at all your trips below! Travel somewhere new? Add a new trip to your Travel Log!</p>
                    </div>
                  </div>
                </div>
            </div>
      </div>
      <div class="container-fluid mt--7">
    <div class="row">
    <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div class="card card-profile shadow">
                <div class="row justify-content-center">
                    <div class="col-lg-3 order-lg-2">
                        <div class="card-profile-image">
                            <a href="#">
                                <img src={this.props.currentTraveler.photo} class="rounded-circle"/>
                            </a>
                        </div>
                    </div>
                </div>
                    <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div class="d-flex justify-content-between">
    </div>
    </div>
    <div class="card-body pt-0 pt-md-4">
    <div class="row">
    <div class="col">
    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
    </div>
    </div>
    </div>
    <div class="text-center">
    <h3>
    {this.props.currentTraveler.firstname} {this.props.currentTraveler.lastname}<span class="font-weight-light"></span>
    </h3>
    <div class="h5 font-weight-300">
    <i class="ni location_pin mr-2"></i>New York, New York
    </div>
    <div class="h5 mt-4">
    <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
    </div>
    <div>
    <i class="ni education_hat mr-2"></i>University of Computer Science
    </div>
    <hr class="my-4"></hr>
    <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
    <div><EditTraveler rerender={this.props.rerender} currentTraveler={this.props.currentTraveler}/></div>
    <br></br>
    <div><DeleteTraveler history={this.props.history} currentTraveler={this.props.currentTraveler} /></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-xl-8 order-xl-1">
    <div class="card bg-secondary shadow">
    <div class="card-header bg-white border-0">
    <div class="row align-items-center">
    <div class="col-8">
    <h3 class="mb-0">My trips</h3>
    </div>
    <div class="col-4 text-right">
    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
    </div>
    </div>
    </div>
    <div class="card-body">
    <TripList rerender={this.props.rerender} currentTraveler={this.props.currentTraveler} />
    </div>
    </div>
    </div>
    </div>
    </div>
    <footer class="footer">
      <div class="row align-items-center justify-content-xl-between">
        <div class="col-xl-6 m-auto text-center">
          <div class="copyright">
              <p>Made with <a href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">Argon Dashboard</a> by Creative Tim</p>
          </div>
        </div>
      </div>
    </footer>
</body>
    )
  }
}
