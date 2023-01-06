import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  const [show, setShow] = useState(true)

  
  useEffect(() => {
    let time = 0;
    let timer = setInterval(() => {
      time++;
      console.log(time)
      if(time >= 5){
        clearInterval(timer);
        setShow(false)
      }
    }, 1000)
  }, [])


  if (show) {
    return (
      <div>
        <Counter count={5} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Sem contador</h1>
      </div>
    );
  }

}

export default App;
