import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import InfinityScrollHOC from './components/InfinityScrollHOC'
import { Provider } from 'react-redux'
import FavoritePhotosHOC from './components/FavoritePhotosHOC'
import configureStore from './configureStore'
import RootHelper from './RootHelper'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <Router>
      <RootHelper>
        <Route component={InfinityScrollHOC} path="/" exact/>
        <Route component={FavoritePhotosHOC} path="/favorite"/>
      </RootHelper>
    </Router>
  </Provider>
)

export default Root
