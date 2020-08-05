import { useState, useEffect, useRef } from "react";

export default () => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const domRef = useRef<HTMLInputElement>(null);

  // 修改useRef的值，组件不会重新render
  const handleClicked = () => {
    setTimeout(() => {
      console.log(likeRef, "==likeRef==");
      console.log(`like: clicked ${like} times`);
      console.log(`likeRef.current: clicked ${likeRef.current} times`);
    }, 1000);
  };

  const handleSetLike = () => {
    setLike(like + 1);
    likeRef.current++;
  };

  useEffect(() => {
    if (domRef && domRef.current) {
      console.log("useEffect domRef");
      domRef.current.focus();
    }
  });

  return {
    like,
    handleClicked,
    handleSetLike,
    domRef,
  };
};
