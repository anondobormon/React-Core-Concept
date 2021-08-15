import "./App.css";
import ClickCounter from "./Component/ClickCounter";
import Counter from "./Component/Counter";

function App() {
  return (
    <div>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
