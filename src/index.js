// Dependencies
import React                                     from 'react'
import ReactDOM                                  from 'react-dom'
import { Provider }                              from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import reducers                                  from './reducers'
import reduxThunk                                from 'redux-thunk'
// Components
import App                                       from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#root')
)