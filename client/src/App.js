import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Admin from "./Components/Admin/Admin";
import Products from "./Components/Products/Products";
import ProductPage from "./Components/ProductPage/ProductPage";
import CartWidget from "./Components/CartWidget/CartWidget";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Should save something in localstorage to bind this browser to this account.
//user = {"seed":1231241, "email":"daniel@ahl.se"};

const App = () => {
  const [customer, setCustomer] = useState();
  const [products, setProducts] = useState();

  const updateCustomer = updatedCustomer => {
    setCustomer(updatedCustomer);
    localStorage.setItem("localCustomer", JSON.stringify(updatedCustomer));
  };

  useEffect(() => {
    let customer = JSON.parse(localStorage.getItem("localCustomer"));

    if (customer) {
      console.log("Customer exists");
      setCustomer(customer);
    } else {
      console.log("Customer does not exist");
      let customer = { Name: "", Email: "", cart: [], isLoggedIn: false };
      localStorage.setItem("localCustomer", JSON.stringify(customer));
      setCustomer(customer);
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

  return (
    <>
      <Router>
        <NavBar cart={customer ? customer.cart : null} />
        <main>
          <Switch>
            <Route path="/account">
              <h2>Hello!</h2>
            </Route>
            <Route path="/cart">
              <CartWidget customer={customer} setCustomer={setCustomer} products={products}/>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/products/">
              <ProductPage
                customer={customer}
                updateCustomer={updateCustomer}
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
