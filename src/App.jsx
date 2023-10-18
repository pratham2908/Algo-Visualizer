import HomePage from "./Components/HomePage";
import './Styles/home-page.css';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tree from "./Algorithms/Tree/Tree";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tree" element={<Tree />} />
      </Routes>
    </Router>
  );
}

export default App;
