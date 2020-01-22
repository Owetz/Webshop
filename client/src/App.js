import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Admin from './Components/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

try {
  fetch('https://localhost:5001/products').then(res => res.json()).then(res => console.log(res));
} catch (error) {
  console.log(error);
}

try {
  fetch('https://localhost:5001/products/1').then(res => res.json()).then(res => console.log(res));
} catch (error) {
  console.log(error)
}

//Should save something in localstorage to bind this browser to this account.
//user = {"seed":1231241, "email":"daniel@ahl.se"}; 


const App = () => {
  return (
    <>
      <Router>
      <NavBar />
      <Switch>
          <Route path="/account">
            <h2>Hello!</h2>
          </Route>
          <Route path="/cart">
            <h2>GoodBye!</h2>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            Hello World
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
