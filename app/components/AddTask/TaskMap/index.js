import React from 'react';
import MapStyle from './MapStyle';

let map;
let newMarker;

export default class TaskMap extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.leafletMap = this.leafletMap.bind(this);
    this.marker = this.marker.bind(this);
  }
  componentDidMount() {
    this.leafletMap();
  }
  componentDidUpdate(prevProps){
    const { lat, lng } = this.props.pCord;
    if (prevProps.pCord !== this.props.pCord) {
          this.marker(lat, lng);
          }
}
  leafletMap() {
    map = L.map('mapid', {
      center: [17.4622, 78.356],
      zoom: 13
    });

      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(map)

      this.marker();
  }
  marker(lat = 17.4622, lng = 78.356) {
    map.panTo(new L.LatLng(lat, lng), { animate: true, duration: 4.0 });
       if (typeof (newMarker) === 'undefined') {
         newMarker = new L.marker([lat, lng], { draggable: true});
         newMarker.addTo(map);
       } else {
         newMarker.setLatLng([lat, lng]);
       }
  }
  render() {
    return (
      <MapStyle id="mapid"></MapStyle>
    );
  }
}
