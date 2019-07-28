import React from 'react'
import { connect } from 'react-redux'
import App from './App'
import { changeMode, changeRowsLength } from '../actions'

const InfinityScrollHOC = props => {
  const { dispatch } = props
  const browserHeight = window.innerHeight
  const rowsLength = Math.ceil(browserHeight / 400)

  dispatch(changeMode('infinityScroll'))
  dispatch(changeRowsLength(rowsLength))

  return <App/>
}

export default connect()(InfinityScrollHOC)
