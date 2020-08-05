import { useState } from "react";

export default () => {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    const newCounter = counter <= 0 ? counter : counter + 1;
    setCounter(newCounter);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    handlePlus,
    handleMinus,
  };
};
