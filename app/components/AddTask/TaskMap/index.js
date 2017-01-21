import React from 'react';
import MapStyle from './MapStyle';

let map;
let newMarkerOne;
let newMarkerTwo;
let latlngs = [];
let polyline;

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
       if (typeof (newMarkerOne) === 'undefined') {
         newMarkerOne = new L.marker([lat, lng], { draggable: true});
         newMarkerOne.addTo(map);
         latlngs[0] = [lat, lng];
       } else {
         newMarkerOne.setLatLng([lat, lng]);
         latlngs[0] = [lat, lng];
       }
       if (typeof (newMarkerTwo) === 'undefined') {
         newMarkerTwo = new L.marker([17.4622, 78.356], { draggable: true});
         newMarkerTwo.addTo(map);
         latlngs[1] = [17.4622, 78.356];
       } else {
         newMarkerTwo.setLatLng([17.4622, 78.356]);
         latlngs[1] = [17.4622, 78.356];
       }
       console.log(latlngs);
       if(latlngs[0] !== null && latlngs[1] !== null){
         polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
         map.fitBounds(polyline.getBounds());
       }else{
        polyline.setLatLngs(latlngs);
        map.fitBounds(polyline.getBounds());
       }
  }
  render() {
    return (
      <MapStyle id="mapid"></MapStyle>
    );
  }
}
