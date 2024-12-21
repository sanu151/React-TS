// import React from "react";

type UsersProps = {
  name: string;
  age: number;
  isRegistered: boolean;
};

const Users = ({ name, age, isRegistered }: UsersProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
      {isRegistered ? <p>Registered User</p> : <p>Not Regisered</p>}
    </div>
  );
};

export default Users;
