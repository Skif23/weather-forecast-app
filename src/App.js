import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Home/Home";
import Logo from "./components/Logo/Logo";
import NoPage from "./components/NoPage/NoPage";
import ConditionSubmit from "./components/ConditionSubmit/ConditionSubmit.js";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>React Weather App</h1>
          <Logo />
        </header>
        <div className="content">
          <BrowserRouter>
            <ol>
              <li>
                <NavLink exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/condition-submit">
                  Condition Submit
                </NavLink>
              </li>
            </ol>
            <div className="timer">
              <p>
                {date.toLocaleTimeString()} | {date.toLocaleDateString()}
              </p>
            </div>
            <Routes>
              <Route index element={<Home />} />
              <Route path="condition-submit" element={<ConditionSubmit />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      <footer className="footer">Weather Forecast Application</footer>
    </div>
  );
}

export default App;
