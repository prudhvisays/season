import React from 'react';
import './MapStyle.css';

let placeSearch;
let searchBox;

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
];

export default class GMaps extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.geolocate = this.geolocate.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.searchBoxPlaces = this.searchBoxPlaces.bind(this);
  }
  componentDidMount() {
    this.initAutocomplete();
  }
  initAutocomplete() {
    searchBox = new google.maps.places.SearchBox(
            document.getElementById('places-search'));
    searchBox.addListener('places_changed', () => {
                  this.searchBoxPlaces(searchBox);
    });
  }
  geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        });
        console.log(circle.getBounds());
        searchBox.setBounds(circle.getBounds());
      });
    }
  }
  searchBoxPlaces(searchbox) {
    let lat;
    let lng;
    const places = searchbox.getPlaces();
    places.forEach((place) => {
      lat = place.geometry.location.lat();
      lng = place.geometry.location.lng();
    });
    this.props.pickupCord({lat, lng});
    if (places.length === 0) {
      window.alert('We did not find any places matching that search!');
    }
  }
  render() {
    return (
      <div id="locationField">
        <input
          id="places-search"
          placeholder="Search address"
          onFocus={this.geolocate} type="text"
        />
      </div>
    );
  }
}
