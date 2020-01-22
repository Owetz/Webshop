import React from "react";
import "./Admin.css";
import AddProductForm from '../AddProductForm/AddProductForm';
try {
  fetch("https://localhost:5001/Admin")
    .then(res => res.json())
    .then(res => console.log(res));
} catch (err) {
  console.log(err);
}

const Admin = () => {
  return (
    <>
      <h2>Admin</h2>
      <AddProductForm />
    </>
  );
};

export default Admin;
