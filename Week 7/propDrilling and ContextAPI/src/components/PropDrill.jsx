import { useState } from "react";

const PropDrill = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
};

export default PropDrill;

function Count({ count }) {
  return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
