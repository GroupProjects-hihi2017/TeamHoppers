import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleNav: false
    }
  }
    handleClick(toggleNav) {
      this.setState({toggleNav})
    }

  render() {
    let {toggleNav} = this.state
      return (
        <div className='no-border nav-box'>
          <header className = 'container'>
            <nav>
              <a href="#" onClick={() => this.handleClick(!toggleNav)} className='menu-icon'>&#9776;</a>
              <ul className={this.state.toggleNav ? 'toggle-on' : 'toggle-off'}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/organisations'}>Wellington Organisations</Link></li>
                <li><Link to={'/general-info'}>General Info</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      )
    }
}
const mapStateToProps = (state) => {
  return {
    toggleNav: state.toggleNav
  }
}

export default connect (mapStateToProps)(Nav)
