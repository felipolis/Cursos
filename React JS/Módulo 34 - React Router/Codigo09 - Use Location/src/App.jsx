import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Aula from './components/Aula';
import Aulas from './components/Aulas';
import Sobre from './components/Sobre';
import Assistir from './components/Assistir';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aulas/:id" element={<Aula />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/assistir" element={<Assistir />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
