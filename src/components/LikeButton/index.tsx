import React from "react";
import useLikeButton from "./useLikeButton";

import "./index.scss";

const LikeButton: React.FC = () => {
  const { like, handleClicked, handleSetLike, domRef } = useLikeButton();

  return (
    <>
      <button onClick={handleSetLike}>{like}</button>
      <button className="red" onClick={handleClicked}>
        click me
      </button>
      <input type="text" ref={domRef} />
    </>
  );
};

export default LikeButton;
