import React, { useState } from 'react'
import { auth, db } from '../config/Config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const Signup = (e) => {
        e.preventDefault()
        
        auth.createUserWithEmailAndPassword(email,password).then((cred)=> {
            db.collection('SignedUserData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(()=>{
                setName('')
                setEmail('')
                setPassword('')
                setError('')
                navigate('/login')
                //window.open("/login")
                //window.history.pushState({}, undefined, "/login")
                //window.location.reload()
            }).catch(err=>setError(err.message))
        }).catch(err=>setError(err.message))
    }

  return (
    <div className='container'>
        <br/>
        <h2>Registar</h2>
        <hr/>
        <form autoComplete='off' className='form-group' onSubmit={Signup}>
            <label htmlFor='Name'>Nome</label>
            <br/>
            <input type='text' className='form-control' required
            onChange={(e)=> setName(e.target.value)} value={name}/>
            <br/>
            <label htmlFor='Email'>Email</label>
            <br/>
            <input type='email' className='form-control' required
            onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <br/>
            <label htmlFor='Password'>Senha</label>
            <br/>
            <input type='password' className='form-control' required
            onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <br/>
            <button type='submit' className='btn btn-success btn-md mybtn'>REGISTRAR</button>
        </form>
        {error && <div className='error-msg'>{error}</div>}
        <br/>
        <span>Já possui uma conta? Faça login
            <Link to='/Login'> Aqui</Link>
        </span>
    </div>
  )
}
