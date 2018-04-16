import React, {Component} from "react";

class GoogleMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lon: this.props.lon
      }
    });
  }

  render(){
    //this.refs.map will give a direct reference
    //to this component
    return <div ref="map" />
  }
}

export default GoogleMap;
