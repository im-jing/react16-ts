import React from "react";
import logo from "./logo.svg";
import MouseTracker from "./components/MouseTracker";
import useMouseTracker from "./hooks/useMouseTracker";
import useUrlLoader from "./hooks/useUrlLoader";
import LikeButton from "./components/LikeButton";

import "./App.css";

interface ITheme {
  [key: string]: {
    color: string;
    background: string;
  };
}

const themes: ITheme = {
  light: {
    color: "#000000",
    background: "#eeeeee",
  },
  dark: {
    color: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext(themes.light);

interface IShowResult {
  message: string;
  status: string;
}

function App() {
  // const positions = useMouseTracker()
  // const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random')
  // const dogRes = data as IShowResult

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MouseTracker />
          <LikeButton />
          {/* <p>X: {positions.x}, Y: {positions.y}</p> */}
          {/* {loading
          ? <div>loading...</div>
          : <img src={dogRes && dogRes.message} alt="" />
        } */}
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
