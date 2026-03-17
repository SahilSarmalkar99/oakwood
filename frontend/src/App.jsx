import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Journel from './pages/Journel'
import { Routes , Route } from 'react-router-dom'
import FullscreenMenu from './components/Navbar'

const App = () => {
  return (
    <div>

      <FullscreenMenu />
      <Routes>

        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/journel' element={<Journel />}/>
      </Routes>

      {/* <Home /> */}

      {/* <About /> */}

      {/* <Journel /> */}
    </div>
  )
}

export default App