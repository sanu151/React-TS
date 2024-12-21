import "./App.css";
import Users from "./components/Users";

function App() {
  return (
    <>
      <h1>Built in Props types</h1>
      <Users name="Supriyo Das" age={37} isRegistered={true} />
      <Users name="Rupa Das" age={28} isRegistered={false} />
    </>
  );
}

export default App;
