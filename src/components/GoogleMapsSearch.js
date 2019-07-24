import React from 'react'
import Autocomplete from 'react-google-autocomplete';

export default class component Map extends React.Component {
 /**
  * src = https://medium.com/@imranhsayed/google-maps-in-react-autocomplete-location-search-draggable-marker-marker-infobox-565ab8e8cf22
  * When the user types an address in the search box
  * @param place
  */

  state = {
   address: '',
   city: '',
   area: '',
   state: '',
   mapPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
   },
   markerPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
    }
  }

  onPlaceSelected = ( place ) => {
  const address = place.formatted_address,
   addressArray =  place.address_components,
   city = this.getCity( addressArray ),
   area = this.getArea( addressArray ),
   state = this.getState( addressArray ),
   latValue = place.geometry.location.lat(),
   lngValue = place.geometry.location.lng();

// Set these values in the state.
  this.setState({
   address: ( address ) ? address : '',
   area: ( area ) ? area : '',
   city: ( city ) ? city : '',
   state: ( state ) ? state : '',
   markerPosition: {
    lat: latValue,
    lng: lngValue
   },
   mapPosition: {
    lat: latValue,
    lng: lngValue
   },
  })
 };
render(){
return(
{/* For Auto complete Search Box */}
      <Autocomplete
       style={{
        width: '100%',
        height: '40px',
        paddingLeft: '16px',
        marginTop: '2px',
        marginBottom: '100px'
       }}
       onPlaceSelected={ this.onPlaceSelected }
       types={['(regions)']}
      />
)
}
