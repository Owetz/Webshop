import React from "react";
import "./Admin.css";
try {
  fetch("https://localhost:5001/Admin")
    .then(res => res.json())
    .then(res => console.log(res));
} catch (err) {
  console.log(err);
}

const Admin = () => {
  return <h2>Admin</h2>;
};

export default Admin;
