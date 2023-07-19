import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/Config'
import { useNavigate } from 'react-router-dom'


export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

   const login = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password).then(() => {
      setEmail('')
      setPassword('')
      setError('')
      navigate('/')
      //window.history.pushState({}, undefined, "/")
      //window.location.reload()
    }).catch(err=>setError(err.message))
   }

  return (
    <div className='container'>
      <br />
      <h2>LOGIN</h2>
      <br />
      <form autoComplete='off' className='form-group' onSubmit={login}>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' required
            onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <label htmlFor='email'>Password</label>
          <input type='password' className='form-control' required
            onChange={(e) => setPassword(e.target.value)} value={password} />
            <br />
            <button type='submit' className='btn btn-success btn-md mybtn'>LOGIN</button>
      </form>
      {error && <span className='error-msg'>{error}</span>}
      <br />
      <span>Não possui uma conta? Resgistre
          <Link to='/signup'> Aqui</Link>
      </span>
    </div>
  )
}
