import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Admin from "./Components/Admin/Admin";
import Products from "./Components/Products/Products";
import ProductPage from "./Components/ProductPage/ProductPage";
import CartWidget from "./Components/CartWidget/CartWidget";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Message from './Components/Message/Message';

//Should save something in localstorage to bind this browser to this account.
//user = {"seed":1231241, "email":"daniel@ahl.se"};

const App = () => {
  const [customer, setCustomer] = useState();
  const [products, setProducts] = useState();
  const [sizes, setSizes] = useState();
  const [colors, setColors] = useState();
  const [message, setMessage] = useState();

  const updateCustomer = updatedCustomer => {
    setCustomer(updatedCustomer);
    localStorage.setItem("localCustomer", JSON.stringify(updatedCustomer));
  };

  useEffect(() => {
    let customer = JSON.parse(localStorage.getItem("localCustomer"));

    if (customer) {
      console.log("Customer exists");
      updateCustomer(customer);
    } else {
      console.log("Customer does not exist");
      let customer = { Name: "", Email: "", cart: [], isLoggedIn: false };
      localStorage.setItem("localCustomer", JSON.stringify(customer));
      updateCustomer(customer);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("https://localhost:5001/products")
          .then(res => res.json())
          .then(res => {
            let data = [];
            res.map(item => data[item.articleName] = item);
            return data;
          })
          .then(data => {
            setProducts(data);
          })
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        await fetch('https://localhost:5001/sizes').then(res => res.json()).then(res => setSizes(res))
      } catch (e) {
        console.log(e);
      }
    }

    const fetchColors = async () => {
      try {
        await fetch('https://localhost:5001/colors').then(res => res.json()).then(res => setColors(res))
      } catch (e) {
        console.log(e);
      }
    }
    
    fetchColors();
    fetchSizes();
  }, [])

  return (
    <>
    {message ? <Message message={message} setMessage={setMessage}/> : null}
      <Router>
        
        <NavBar cart={customer ? customer.cart : null} />
        
        <main>
          <Switch>
            <Route path="/account">
              <h2>Hello!</h2>
            </Route>
            <Route path="/cart">
              <CartWidget customer={customer} updateCustomer={updateCustomer} products={products} setMessage={setMessage}/>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/products/">
              <ProductPage
                Sizes={sizes}
                Colors={colors}
                customer={customer}
                updateCustomer={updateCustomer}
                setMessage={setMessage}
              />
            </Route>
            <Route path="/">
              {products ? <Products products={products} />:null}
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </>
  );
};

export default App;
