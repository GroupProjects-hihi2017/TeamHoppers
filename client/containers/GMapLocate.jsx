import React from 'react'
import {connect} from 'react-redux'

import GMap from './GMap'

class GMapLocate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      address: props.address,
      lat: null,
      lng: null
    }
  }
  componentDidMount () {
    this.findLatLong()
  }
  componentWillReceiveProps (nextProps) {
    this.setState({address: nextProps.address})
    this.findLatLong()
  }
  findLatLong () {
    this.geo = new google.maps.Geocoder
    this.geo.geocode({address: this.state.address}, (res) => this.callbackToState(res))
  }
  callbackToState (res) {
    this.setState({lat: res[0].geometry.location.lat(), lng: res[0].geometry.location.lng()})
    this.props.dispatch({type: 'INIT'})
  }
  render () {
    let {lat, lng} = this.state
    return <div>
      {lat && lng && <GMap center={ {lat, lng} } /> }
    </div>
  }
}

export default connect()(GMapLocate)
