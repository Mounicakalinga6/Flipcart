import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'
import AcPage from './stores/pages/AcPage'

import MobilePage from './stores/pages/MobilePage'
import FurniturePage from './stores/pages/FurniturePage'
import ComputerPage from './stores/pages/ComputerPage'
import WomenPage from './stores/pages/WomenPage'
import MenPage from './stores/pages/MenPage'
import FridgePage from './stores/pages/FridgePage'
import MobileSingle from './stores/singles/MobileSingle'
import AcSingle from './stores/singles/AcSingle'
import FridgeSingle from './stores/singles/FridgeSingle'
import ComputerSingle from './stores/singles/ComputerSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import MenSingle from './stores/singles/MenSingle'
import WomenSingle from './stores/singles/WomenSingle'





const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={ <LandingPage />}/>
        <Route path='/ac' element={<AcPage />}/>
        <Route path='/mobiles' element={<MobilePage />}/>
        <Route path='/furniture' element={<FurniturePage />}/>
        <Route path='/computer' element={<ComputerPage />}/>
        <Route path='/women' element={<WomenPage />}/>
        <Route path='/men' element={<MenPage />}/>
        <Route path='/fridge'element={<FridgePage />}/>
        <Route path='/mobiles/:id' element={<MobileSingle />}/>
        <Route path='/ac/:id' element={<AcSingle />}/>
        <Route path='/fridge/:id' element={<FridgeSingle />}/>
        <Route path='/computer/:id' element={<ComputerSingle />}/>
        <Route path='/furniture/:id'element={<FurnitureSingle />}/>
        <Route path='/men/:id' element={<MenSingle />}/>
        <Route path='/women/:id'element={<WomenSingle />}/>
       
        
         

       </Routes>
       </BrowserRouter>
     

      
    </div>
  )
}

export default App
