import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { AddProducts } from './components/AddProducts'
import { ProductsContextProvider } from './global/ProductsContext'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { auth, db } from './config/Config'
import { CartContextProvider } from './global/CartContext'
import { Cart } from './components/Cart'
export class App extends Component {

  state={
    user:null
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('SignedUserData').doc(user.uid).get().then(snapshot=>{
          this.setState({
            user: snapshot.data().Name
          })
        })
      }else{
        this.setState({
          user:null
        })
      }
    })
  }



  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home user={this.state.user}/>}/>
            <Route path='/addproducts' element={<AddProducts/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/cartproducts' element={<Cart user={this.state.user}/>} />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    )
  }
}

export default App