import React from "react";

interface propsType {
  // history:
}

const Home = (props: any) => {
  console.log(props);
  console.log("=render home=");
  return <div className="content">home...</div>;
};

export default Home;
