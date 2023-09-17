import { Section_1 } from "./sections.jsx";
import Cv from "./Cv.jsx";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [count, setCount] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>CV Maker</h1>
      <div className="main">
        <div className="Sections">
          <Section_1
            name={name}
            email={email}
            phone={phone}
            onNameChange={handleNameChange}
            onEmailChange={handleEmailChange}
            onPhoneChange={handlePhoneChange}
          />
          <button
            onClick={() => {
              setCount(true);
            }}
          >
            save
          </button>
          <button
            onClick={() => {
              setCount(false);
            }}
          >
            clear
          </button>
        </div>
        <div className="CV_container">
          <h2 style={{ textDecoration: "underline" }}>My cv</h2>
          {count ? (
            <Cv name={name} email={email} phone={phone} />
          ) : (
            <Cv name={""} email={""} phone={""} />
          )}
        </div>
      </div>
    </>
  );
}
