// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line react/prop-types
export default function Cv({ name, email, phone, title, place }) {
  return (
    <>
      <sec>
        <div className="name">{name}</div>
        <div className="title">{title}</div>
      </sec>
      <sec>
        <div className="place">{place}</div>
        <div className="phone">{phone}</div>
        <div className="email">{email}</div>
      </sec>
    </>
  );
}
