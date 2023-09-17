// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line react/prop-types
export default function Cv({ name, email, phone }) {
  return (
    <>
      <div className="name">Name : {name}</div>
      <div className="email">Email : {email}</div>
      <div className="phone">Phone : {phone}</div>
    </>
  );
}
