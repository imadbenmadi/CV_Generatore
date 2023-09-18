import { Section_1 } from "./sections.jsx";
import Cv from "./Cv.jsx";
import { useState } from "react";
import Footer from "./footer.jsx";
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [title, setTitle] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <h1 className="Title">CV Maker</h1>
      <div className="main">
        <div className="Sections">
          <Section_1
            name={name}
            email={email}
            phone={phone}
            place={place}
            title={title}
            onNameChange={handleNameChange}
            onEmailChange={handleEmailChange}
            onPhoneChange={handlePhoneChange}
            onPlaceChange={handlePlaceChange}
            onTitleChange={handleTitleChange}
          />
        </div>
        <div className="CV_container">
          <Cv name={name} email={email} phone={phone} title={title} place={place} />
        </div>
      </div>
      <Footer />
    </>
  );
}
