// Dependencies
import React                     from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history                   from '../history'
// Components
import Header                    from './Header'
import StreamCreate              from './streams/StreamCreate'
import StreamDelete              from './streams/StreamDelete'
import StreamEdit                from './streams/StreamEdit'
import StreamList                from './streams/StreamList'
import StreamShow                from './streams/StreamShow'

const App = () => {
  return (
    <div className='ui container'>
      <Router history={ history }>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={ StreamList } />
            <Route path='/streams/new' component={ StreamCreate } />
            <Route path='/streams/edit/:id' component={ StreamEdit } />
            <Route path='/streams/delete/:id' component={ StreamDelete } />
            <Route path='/streams/:id' component={ StreamShow } />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App