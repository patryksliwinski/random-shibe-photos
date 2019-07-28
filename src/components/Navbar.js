import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const createNav = (link, title) => (
  <nav className="navbar navbar-dark justify-content-center bg-dark">
    <Link className="navbar-brand" to={`/${link}`}>
      {title}
    </Link>
  </nav>
)

const Navbar = props => {
  switch (props.mode) {
  case 'favorite':
    return createNav('', 'Go to Infinity scroll')
  case 'infinityScroll':
    return createNav('favorite', 'Go to Favorite photos')
  default:
    return createNav('', 'Error 404 - Return to Infinity scroll')
  }
}

Navbar.defaultProps = {
  match: { params: null },
}

const mapStateToProps = ({ mode }) => {
  return { mode }
}

export default connect(mapStateToProps)(Navbar)
