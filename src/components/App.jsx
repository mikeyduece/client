// Dependencies
import React                    from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to='/pagetwo'>Nav to 2</Link>
    </div>)
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      <Link to='/'>Nav to 1</Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={ PageOne } />
          <Route path='/pagetwo' component={ PageTwo } />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App