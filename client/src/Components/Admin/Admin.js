import React, {useState, useEffect} from "react";
import "./Admin.css";
import AddProductForm from '../AddProductForm/AddProductForm';
import Order from '../Order/Order';

const Admin = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async() => {
      try {
        await fetch("https://localhost:5001/Admin")
          .then(res => res.json())
          .then(res => setOrders(res));
      } catch (err) {
        console.log(err);
      }
    }
    getOrders();
  },[]);

  useEffect(() => {
    console.log(orders);
  },[orders]);

  return (
    <>
      <h2>Orders:</h2>
      
      <section className="orderList">
        {orders.map(order => <Order key={order.id} order={order} />)}
      </section>


      <br/>
      <AddProductForm />
    </>
  );
};

export default Admin;
