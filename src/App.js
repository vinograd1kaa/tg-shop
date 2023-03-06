import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import Header from "./components/Header/Header";
const tg = window.Telegram.WebApp;

const App = () => {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
