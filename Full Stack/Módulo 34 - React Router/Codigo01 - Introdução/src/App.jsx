import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Aulas from './components/Aulas';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Aulas />
      <Sobre />
    </div>
  );
}

export default App;
