import "./App.css";
import Stack from "./Pages/Stack";
import Queue from "./Pages/Queue";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="flex justify-between items-center">
        <h1 className="m-2 text-3xl">Stack & Queue</h1>
        <ul className="flex mx-10 my-5">
          <li>
            <Link to="/stack">Stack</Link>
          </li>
          <li>
            {" "}
            <Link to="/queue">Queue</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/stack" Component={Stack} />
        <Route path="/queue" Component={Queue} />
      </Routes>
    </Router>
  );
}

export default App;
