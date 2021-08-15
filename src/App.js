import "./App.css";
import ClickCounter from "./Component/ClickCounter";
import Counter from "./Component/Counter";
import HoverCounter from "./Component/HoverCounter";

function App() {
  return (
    <div>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
