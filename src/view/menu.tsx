import React from "react";
import menuDatas from "../data/menu";

interface menu {
  title: string;
  path: string;
}

const createMenuItem = menuDatas.map((item, idx) => {
  return (
    <li key={idx}>
      <a href={item.path}>{item.title}</a>
    </li>
  );
});

const Menu = () => {
  return <ul className="menu">{createMenuItem}</ul>;
};

export default Menu;
