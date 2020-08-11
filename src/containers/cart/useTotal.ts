import { useState } from "react";

const useTotal = () => {
  const [sum, setSum] = useState(0);

  const getTotal = (newTotal: number): void => {
    setSum(newTotal);
  };

  return { sum, getTotal };
};

export default useTotal;
