import HomePage from "./Components/HomePage";
import './Styles/home-page.css';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bfs from "./Algorithms/Tree/Bfs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bfs" element={<Bfs />} />
      </Routes>
    </Router>
  );
}

export default App;
