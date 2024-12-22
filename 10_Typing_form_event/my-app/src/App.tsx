import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, email };
    console.log(data);
  };

  return (
    <>
      <h2>Typing Form Event</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">
            Name :{" "}
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleNameChange}
              value={name}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email :{" "}
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleEmailChange}
              value={email}
              required
            />
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default App;
