import { useEffect, useState } from "react";
import Proptypes from "prop-types";
const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};
Button.propTypes = {
  text: Proptypes.string.isRequired,
  click: Proptypes.func.isRequired,
};
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter - 1);
  };
  console.log("always~~");
  useEffect(() => {
    console.log("useEffect~~");
  }, []);
  useEffect(() => {
    console.log("conter change~~");
  }, [counter]);
  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "blue" }}>
        Total clicks: {counter}{" "}
      </h1>
      <Button text="+1" click={plus} />
      <Button text="-1" click={minus}></Button>
    </div>
  );
};

export default Counter;
