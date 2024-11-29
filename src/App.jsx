import React from 'react'
import Home from './Home'
import Blog from './Blog'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Post from './Post'

const App = () => {
  return (
    <>
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Blog'>Blog</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>

    </Router>
    <Post/>
  
   </> 
  )
  
}


export default App