import React, {Suspense} from 'react'
import { BrowserRouter as Router, Link ,Route, Routes } from 'react-router-dom'

const Home = React.lazy( () => ( import('./Components/Home') ) )
const About = React.lazy( () => ( import('./Components/About') ) )


function App ( ) { 
  return <Router>    
      <Suspense>
      <div>
        <Link to = "/" >Home</Link>
        <Link to = "/about">About</Link>
      </div>
      <Routes>
        <Route exact path = '/' Component={Home} />
        <Route path = "/about" Component={About} />      
      </Routes>
      </Suspense>
  </Router>
}

export default App