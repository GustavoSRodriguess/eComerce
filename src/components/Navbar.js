import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { auth } from '../config/Config'

export const Navbar = ({user}) => {
  
  const navigate = useNavigate()

  const logout = () =>{
    auth.signOut().then(() =>{
      navigate('/login')
    })
  }

  return (
    <div className='navbox'>
       <div className='leftside'>
        <img src={logo} alt="" />
       </div>
       
       {}
       {!user && <div className='rightside'>
        <Link to='signup' className='navlinks'>SIGN UP</Link>
        <Link to='login' className='navlinks'>LOGIN</Link>
       </div>}

        {}
       {user && <div className='rightside'> 
        <Link to = "/" className='navlinks' >{user}</Link>
        <Link to = 'cartproducts' className='navlinks'><Icon icon={cart}/></Link>
        <span className='navlinks'><button className='logout-btn' onClick={logout}>LOGOUT</button></span>
       </div>}
       
    </div>
  )
}
