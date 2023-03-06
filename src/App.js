import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

const App = () => {

  useEffect(() => {
      tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div>
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
