import React from 'react'
import {Route, Routes} from 'react-router'
import Home from '../Components/Home'
import Cardio from '../Components/Cardio'
import GymSystem from '../Components/GymSystem'
import PlateLoaded from '../Components/PlateLoaded'
import FreeWeight from '../Components/FreeWeight'
import Accessories from '../Components/Accessories'
import Bicycle from '../Components/Bicycle'
import Discription from '../Components/Discription'
import Card from '../Components/Card'
import Private from '../Components/Private'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='*' element={<Home/>}></Route>
            <Route path='/Cardio' element={<Cardio/>}></Route>
            <Route path='/GymSystem' element={<GymSystem/>}></Route>
            <Route path='/PlateLoaded' element={<PlateLoaded/>}></Route>
            <Route path='/FreeWeight' element={<FreeWeight/>}></Route>
            <Route path='/Accessories' element={<Accessories/>}></Route>
            <Route path='/Bicycle' element={<Bicycle/>}></Route>
            <Route path='/Discription/:id' element={
              <Private>
                 <Discription/>
              </Private>
             }></Route>
            <Route path='/Card' element={<Card/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes
