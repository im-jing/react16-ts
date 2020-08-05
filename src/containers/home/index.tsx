import React from "react";
import LikeButton from "../../components/likeButton/index";

import useCounter from "./useCounter";

const Home = () => {
  const { counter, handlePlus, handleMinus } = useCounter();

  return (
    <div className="content">
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <p></p>
      <hr />
      <p></p>
      <section>
        <LikeButton />
      </section>
    </div>
  );
};

export default Home;
