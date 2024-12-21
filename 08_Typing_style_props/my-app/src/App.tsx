import "./App.css";
import Component1 from "./components/Component1";

const component1Style = {
  backgroundColor: "green",
  fontSize: "1.3rem",
  color: "white",
  padding: "0.5rem",
};

function App() {
  return (
    <>
      <h1>Typing Style Props</h1>
      <Component1 componentStyle={component1Style} />
    </>
  );
}

export default App;
