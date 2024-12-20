import { useState } from "react";

type User = {
  id: number;
  name: string;
};

const Users = () => {
  const [user, setUser] = useState<null | User>(null);
  const [student, setStudent] = useState<User>({} as User);

  const handleAddUser = () => {
    setUser({ id: 1, name: "Supriyo Das" });
  };

  const handleAddStudent = () => {
    setStudent({ id: 101, name: "Rupa Das" });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <h3>{user?.name}</h3>
      <br></br>
      <button onClick={handleAddStudent}>Add Student</button>
      <h3>
        {student.id} {student.name}
      </h3>
    </div>
  );
};

export default Users;
