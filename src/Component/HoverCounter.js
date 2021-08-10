import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  const { count, incrementCounter } = props;
  return (
    <div>
      <h1 onMouseOver={incrementCounter}>Clicked {count} Times</h1>
    </div>
  );
};
export default withCounter(HoverCounter);
