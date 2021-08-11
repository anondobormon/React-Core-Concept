import "./App.css";
import Clock from "./Component/Clock";

function App() {
  return (
    <div className="App">
      {/* locale is an props */}
      <Clock locale="bn-BD" />
    </div>
  );
}

export default App;
