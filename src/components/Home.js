import React, { useEffect } from 'react'
import { Products } from '../components/Products'
import { Navbar } from '../components/Navbar'
import '../css/Home.css'
import { auth } from '../config/Config'
import { useNavigate } from 'react-router-dom'

export const Home = ({user}) => {

  const navigate = useNavigate()

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(!user){
        navigate('/login')
      }
    })
  })

  return (
    <div className='wrapper'>
        <Navbar user={user}/>
        <Products />
    </div>
  )
}
