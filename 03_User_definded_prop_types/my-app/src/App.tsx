import "./App.css";
import Users from "./components/Users";

const user1 = {
  name: "Supriyo Das",
  age: 37,
  gender: "Male",
  isRegistered: true,
  lang: ["Bengali", "Hindi", "English"],
};
const user2 = {
  name: "Rupa Das",
  age: 27,
  gender: "Female",
  isRegistered: false,
  lang: ["Bengali", "Hindi"],
};

function App() {
  return (
    <>
      <h1>User Defined Prop Types</h1>
      <h2>User List</h2>
      <Users user={user1} />
      <Users user={user2} />
    </>
  );
}

export default App;
