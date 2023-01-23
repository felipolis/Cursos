import './App.css';
import Contador from './components/Contador';
import Header from './components/Header';
import { ContadorProvider } from './ContadorContext'

function App() {
  return (
    <div className="App">
      <ContadorProvider>
        <Header />
        <Contador />
      </ContadorProvider>
    </div>
  );
}

export default App;
