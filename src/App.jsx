import HomePage from "./Components/HomePage";
import './Styles/home-page.css';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tree from "./Algorithms/Tree/Tree";
import Array from "./Algorithms/Array/Array";
import ValidSequence from "./Algorithms/Stack/ValidSequence";
import Stack from "./Algorithms/Stack/Stack";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/array/*" element={<Array />} />
        <Route path="/stack" element={<Stack />} />
      </Routes>
    </Router>
  );
}

export default App;
