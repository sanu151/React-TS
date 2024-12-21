type usersProps = {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
  }[];
};

const Users = ({ users }: usersProps) => {
  return (
    <div>
      {users.map((user) => {
        const { id, name, age, gender } = user;
        return (
          <div key={id} style={{ border: "2px solid", margin: "0.8rem" }}>
            <h5>User - {id}</h5>
            <h3>Name : {name}</h3>
            <h4>Age : {age}</h4>
            <h4>Gender : {gender}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
