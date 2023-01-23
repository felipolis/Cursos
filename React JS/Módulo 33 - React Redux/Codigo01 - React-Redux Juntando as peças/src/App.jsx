import './App.css';
import Contador from './components/Contador';
import Header from './components/Header';
import { createStore } from 'redux';
import contadorReducer from './reducers/contadorReducer';
import { Provider } from 'react-redux';

function App() {

  const store = createStore(contadorReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Contador />
      </Provider>
    </div>
  );
}

export default App;
