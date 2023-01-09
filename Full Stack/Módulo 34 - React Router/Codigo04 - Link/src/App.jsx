import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Aulas from './components/Aulas';
import Sobre from './components/Sobre';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
