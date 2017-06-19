import React from 'react'
import {connect} from 'react-redux'

const defaultCenter = {
  lat: 48.858608,
  lng: 2.294471
};

class GMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: props.center
    }
    console.log({state: this.state});
  }

  componentDidMount() {
    this.loadMap(this.props.center)
  }

  componentWillReceiveProps({center}) {
    // this.loadMap(nextProps.center)
    this.setState({center})
    this.loadMap(center)
  }
  loadMap(center){
      this.map = new google.maps.Map(this.refs.map, {
        center,
        zoom: 17
      });

      this.marker = new google.maps.Marker({
        position: center,
        map: this.map
      });
  }

  render() {
    const mapStyle = {
      width: 300,
      height: 300,
      border: '1px solid black'
    };

    return (
      <div>
        <div ref="map" style={mapStyle} >I should be a map!</div>
      </div>
    );
  }

}
export default connect()(GMap)
