import HomePage from "./Components/HomePage";
import './Styles/home-page.css';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tree from "./Algorithms/Tree/Tree";
import Array from "./Algorithms/Array/Array";
import Stack from "./Algorithms/Stack/Stack";
import LinkedList from "./Algorithms/LinkedList/LinkedList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/array/*" element={<Array />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/linked-list" element={<LinkedList />} />
      </Routes>
    </Router>
  );
}

export default App;
