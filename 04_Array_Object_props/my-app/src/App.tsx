import "./App.css";
import Users from "./components/Users";

const users = [
  {
    id: 1,
    name: "Supriyo Das",
    age: 37,
    gender: "male",
  },
  {
    id: 2,
    name: "Rupa Das",
    age: 27,
    gender: "female",
  },
];

function App() {
  return (
    <>
      <h1>User Defined props (Array of Objects)</h1>
      <Users users={users} />
    </>
  );
}

export default App;
