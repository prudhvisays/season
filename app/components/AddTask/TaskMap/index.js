import React from 'react';
import MapStyle from './MapStyle';
import { AntPath } from 'leaflet-ant-path';

let map;
let newMarkerOne;
let newMarkerTwo;
let latlngs = [];
let antPolyline;

export default class TaskMap extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.leafletMap = this.leafletMap.bind(this);
    this.marker = this.marker.bind(this);
    this.markerTwo = this.markerTwo.bind(this);
    this.polyLine = this.polyLine.bind(this);
  }
  componentDidMount() {
    this.leafletMap();
  }
  componentDidUpdate(prevProps){
    const { pLat, pLng } = this.props.pCord;
    const { dLat, dLng } = this.props.dCord;
    if (prevProps.pCord !== this.props.pCord) {
        this.marker(pLat, pLng);
      }
    if (prevProps.dCord !== this.props.dCord) {
      this.markerTwo(dLat, dLng)
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
  }

  polyLine(latlngs) {
    antPolyline = new L.Polyline.AntPath(latlngs);
    antPolyline.addTo(map);
    map.fitBounds(antPolyline.getBounds());
  }

  marker(pLat, pLng) {
    map.panTo(new L.LatLng(pLat, pLng), { animate: true, duration: 4.0 });
       if (typeof (newMarkerOne) === 'undefined') {
         newMarkerOne = new L.marker([pLat, pLng]);
         newMarkerOne.addTo(map);
         latlngs[0] = [pLat, pLng];
       } else {
         map.removeLayer(antPolyline);
         newMarkerOne.setLatLng([pLat, pLng]);
         latlngs[0] = [pLat, pLng];
         this.polyLine(latlngs)
       }
  }
  markerTwo(dLat, dLng) {
    if (typeof (newMarkerTwo) === 'undefined') {
      newMarkerTwo = new L.marker([dLat, dLng]);
      newMarkerTwo.addTo(map);
      latlngs[1] = [dLat, dLng];
      this.polyLine(latlngs)
    } else {
      newMarkerTwo.setLatLng([dLat, dLng]);
      latlngs[1] = [dLat, dLng];
      map.removeLayer(antPolyline);
      this.polyLine(latlngs)
    }
  }
  render() {
    return (
      <MapStyle id="mapid"></MapStyle>
    );
  }
}
