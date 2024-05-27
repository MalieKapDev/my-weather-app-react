import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchEngine from "./SearchEngine";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <p>
        This project was coded by{" "}
        <a href="https://maliekapdev-portfolio.netlify.app/" target="_blank">
          Malie Kapelianis
        </a>{" "}
        and is open-sourced on{" "}
        <a href="https://github.com/MalieKapDev" target="_blank">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://my-weather-app-react-maliekapdev.netlify.app/"
          target="_blank"
        >
          Netlify
        </a>
      </p>
    </div>
  </StrictMode>
);
