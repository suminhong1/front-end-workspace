import { useState } from "react";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Total clicks : {counter}</h1>
      <Button text="+1" click={plus} />
      <Button text="-1" click={minus} />
      {/* <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button> */}
    </div>
  );
};

export default App;
