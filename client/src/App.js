import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Admin from './Components/Admin/Admin';
import Products from './Components/Products/Products';
import ProductPage from './Components/ProductPage/ProductPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



//Should save something in localstorage to bind this browser to this account.
//user = {"seed":1231241, "email":"daniel@ahl.se"}; 


const App = () => {

  const [customer, setCustomer] = useState();
  const updateCustomer = (updatedCustomer) => {
    setCustomer(updatedCustomer);
  }

  useEffect(() => {
    let customer = JSON.parse(localStorage.getItem('localCustomer'));

    if(customer) {
      console.log('Customer exists');
      setCustomer(customer);
    } else {
      console.log('Customer does not exist');
      let customer = {Name:'', Email:'', cart:[], isLoggedIn:false};
      localStorage.setItem('localCustomer', JSON.stringify(customer));
    }
  },[]);

  return (
    <>
      <Router>
        <NavBar cart={customer ? customer.cart:null}/>
        <main>
          <Switch>
            <Route path="/account">
              <h2>Hello!</h2>
            </Route>
            <Route path="/cart">
              <h2>Din varukorg</h2>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/products/">
              <ProductPage customer={customer} updateCustomer={updateCustomer}/>
            </Route>
            <Route path="/">
              <Products />
            </Route>
          </Switch>
        </main>
      </Router>
    <Footer />
    </>
  );
}

export default App;
