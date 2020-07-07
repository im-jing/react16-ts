import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const domRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);
  console.log(theme, "=theme=");
  const style = {
    color: theme.color,
    background: theme.background,
  };

  // 修改useRef的值，组件不会重新render
  function handleClicked() {
    setTimeout(() => {
      console.log(likeRef, "==likeRef==");
      console.log(`like: clicked ${like} times`);
      console.log(`likeRef.current: clicked ${likeRef.current} times`);
    }, 3000);
  }

  useEffect(() => {
    if (domRef && domRef.current) {
      console.log("useEffect domRef");
      domRef.current.focus();
    }
  });

  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
        }}
      >
        {like}
      </button>
      <button style={style} onClick={handleClicked}>
        click me
      </button>
      <input type="text" ref={domRef} />
    </>
  );
};

export default LikeButton;
