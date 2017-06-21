import React from 'react'
import {connect} from 'react-redux'

const defaultCenter = {
  lat: 48.858608,
  lng: 2.294471
}

class GMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      center: props.center
    }
  }

  componentDidMount () {
    this.loadMap(this.props.center)
  }

  componentWillReceiveProps ({center}) {
    this.setState({center})
    this.loadMap(center)
  }

  loadMap (center) {
    this.map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 17
    })
    this.marker = new google.maps.Marker({
      position: center,
      map: this.map
    })
  }

  render () {
    return (
        <div className='itemClass-org-map' ref="map" >I should be a map!</div>
    )}
  }

export default connect()(GMap)
