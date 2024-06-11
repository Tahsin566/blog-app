
//This is the Front-end

import { useState, useEffect, useRef, useContext } from 'react'
import './App.css'
// import { useForm } from 'react-hook-form'
// import {useSelector,useDispatch} from 'react-redux'
// import { increment,decrement,multiply,incrementByAmount } from './redux/counter/counterslice'
import { Route, Routes, useNavigate, useLocation, Link } from 'react-router-dom'
import About from './components/about'




function App() {

  // const location = useLocation()
  // const nav = useNavigate()
  // const [{access},auth] = useContext(Authcontext)

  



  //When there are more than one routes (more than one components),the components of those routes are not mounted together.The components are mounted when their routes are reached,not before.


  return <>


    <Routes>



      {/* <Route element={<PrivateRoutes Component={Home} />} path='/' exact />

      <Route element={<PrivateRoutes Component={Details} />} path='/details' /> */}

      <Route element={<About />} path='/' />

      

    </Routes>

  </>

}

export default App
