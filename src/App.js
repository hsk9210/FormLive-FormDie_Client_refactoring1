import React, { useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  //02.06일자 본 소감.
  //"https://yangsikdang2.ml:8080/api" / 이건 지우고.
  //엔진엑스는 내일 집에 가서.
  //결국 다시 freenom
  //https://www.freenom.com/en/index.html?lang=en
  useEffect(() => {
    axios.get("http://localhost:3000").then((result) => {
      console.log(result);
    });

    axios.post("http://localhost:3000", { data: "sent?" }).then((result) => {
      console.log(result);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
