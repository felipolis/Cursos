import './App.css';
// import Header from './Header';
import Counter from './Counter';

function App() {
  return (
    <div>
      {/* <Header name="Archanjo" links={["Sobre", "Comprar", "Contato", "Login"]} /> */}
      <Counter count={5} />
    </div>
  );
}

export default App;
