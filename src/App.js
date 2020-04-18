import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import get from './pages/get'
import Post from './pages/Post'
import cget from './pages/cget'
import cpost from './pages/cpost'
import Welcome from './pages/Welcome'
import customer from './pages/customer'
import login from './pages/login'
import allproducts from './pages/allproducts'
import cproduct from './pages/cproduct'
import customerLogin from './pages/customerLogin'
import cart from './pages/cart'

import NavigationBar from './components/NavigationBar'
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import product from './pages/product'

class App extends Component {
  render() {




    return (


      <Router basename="/react-auth-ui/">
        <NavigationBar/>

          <Route exact path='/' component={Welcome}>
          </Route>
              <Route exact path='/get' component={get}>
                
              </Route>
               <Route exact path="/Post" component={Post}>
               </Route>
               <Route exact path="/customer" component={customer}>
               </Route>
               <Route exact path="/product" component={product}>
               </Route>
               <Route exact path="/cget" component={cget}>
               </Route>
               <Route exact path="/cpost" component={cpost}>
               </Route>
               <Route exact path="/customerLogin" component={customerLogin}>
               </Route>
               <Route exact path="/login" component={login}>
               </Route>
               <Route exact path="/allproducts" component={allproducts}>
               </Route>
               <Route exact path="/cproduct" component={cproduct}>
               </Route>
               
               <Route exact path="/cart" component={cart}>
               </Route>
               
              
               

             
               




      </Router>

    )
  }
}

export default App
