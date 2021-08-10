import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
  const { count, incrementCounter } = props;
  return (
    <div>
      <button onClick={incrementCounter}>Clicked {count} Times</button>
    </div>
  );
};
export default withCounter(ClickCounter);
