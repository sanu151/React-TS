import React, { useState } from "react";

const Users = () => {
  const [userName, setUserName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUserName("");
    return console.log(e.target);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        value={userName}
      />
      <button onClick={handleClick}>Reset Input Field</button>

      <p>{userName}</p>
    </div>
  );
};

export default Users;
